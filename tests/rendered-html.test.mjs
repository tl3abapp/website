import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the TL3B home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>TL3B\? \| Padel Match Organizer<\/title>/i);
  assert.match(html, /Find the right players and organize your next padel game/);
  assert.match(html, /View Privacy Policy/);
  assert.match(html, /\/privacy/);
  assert.match(html, /\/terms/);
  assert.match(html, /\/support/);
  assert.match(html, /tl3b-icon\.png/);
  assert.doesNotMatch(html, /Codex is building|react-loading-skeleton/i);
});

test("server-renders release policy pages", async () => {
  const pages = [
    ["/privacy", /Privacy Policy/, /Location and match areas/],
    ["/terms", /Terms of Use/, /Matches and safety/],
    ["/support", /Email support@tl3ab\.app/, /Official TL3B policy links/],
  ];

  for (const [path, heading, content] of pages) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, heading, path);
    assert.match(html, content, path);
  }
});

test("finished site removed starter preview files", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/i);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/i);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});
