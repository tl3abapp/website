import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "إنشاء مباريات بسهولة",
    text: "حدد المنطقة، التاريخ، الوقت، مستوى اللاعبين، ونوع الدعوة خلال خطوات بسيطة.",
  },
  {
    title: "دعوات للأصدقاء والسيركل",
    text: "اختر من يشوف المباراة: العامة، الأصدقاء، السيركل، أو لاعبين محددين.",
  },
  {
    title: "إدارة اللاعبين",
    text: "تابع طلبات الانضمام، اللاعبين المقبولين، التبديل، وتحديثات وقت المباراة.",
  },
  {
    title: "تنبيهات مهمة",
    text: "توصل للمشاركين إشعارات للدعوات، القبول، تعديل الوقت، وتذكير قبل المباراة.",
  },
];

const steps = [
  "أنشئ حسابك وحدد منطقتك",
  "سو مباراة واختر من تدعو",
  "شارك المباراة وتابع المشاركين",
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="التنقل الرئيسي">
        <Link className="brand-link" href="/">
          <Image
            src="/tl3b-icon.png"
            width={54}
            height={54}
            alt="أيقونة تطبيق تلعب"
            priority
            unoptimized
          />
          <span>تلعب؟</span>
        </Link>
        <div className="nav-links">
          <a href="#features">المميزات</a>
          <Link href="/privacy">الخصوصية</Link>
          <Link href="/support">الدعم</Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">تطبيق لتنظيم مباريات البادل</p>
          <h1>رتب مباراتك، ادع ربعك، وخل الملعب يكمل أسرع.</h1>
          <p className="hero-text">
            تلعب يساعدك تسوي مباراة بادل، تختار اللاعبين المناسبين، تتابع
            طلبات الانضمام، وتوصل التحديثات للمشاركين بدون لخبطة القروبات.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/privacy">
              سياسة الخصوصية
            </Link>
            <a className="secondary-action" href="#delete-account">
              طريقة حذف الحساب
            </a>
          </div>
          <div className="hero-facts" aria-label="مميزات مختصرة">
            <span>مناسب للكويت</span>
            <span>دعوات خاصة</span>
            <span>تنبيهات للمباريات</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="هوية تطبيق تلعب">
          <div className="brand-showcase">
            <Image
              src="/tl3b-full-logo.png"
              width={720}
              height={720}
              alt="شعار تلعب"
              priority
              unoptimized
              className="full-logo"
            />
            <div className="mini-app-card">
              <div>
                <span>مباراة سيركل</span>
                <strong>بادل المساء</strong>
                <p>الكويت · ٨:٣٠ م · ٢/٤ لاعبين</p>
              </div>
              <button>إدارة</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-band" aria-label="عن تطبيق تلعب">
        <div>
          <p className="eyebrow">عن تلعب</p>
          <h2>طريقة أرتب لتنسيق مباريات البادل.</h2>
        </div>
        <p>
          تلعب معمول للاعبين اللي يبون يختصرون الرسائل قبل المباراة. الهوست
          يقدر يسوي مباراة، يحدد من توصله الدعوة، يقبل طلبات المباريات العامة،
          ويبلغ المشاركين إذا تغير الوقت أو تفاصيل المباراة.
        </p>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <p className="eyebrow">المميزات</p>
          <h2>مصمم على طريقة سير المباراة الحقيقية.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">شلون يشتغل</p>
          <h2>من فكرة المباراة إلى اكتمال اللاعبين.</h2>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section privacy-preview">
        <div>
          <p className="eyebrow">الخصوصية</p>
          <h2>منطقتك الشخصية ما تظهر للناس كعنوان عام.</h2>
          <p>
            مبارياتك العامة قد تعرض منطقة المباراة حتى يعرف اللاعبون وين
            يلعبون. أما تفاصيل حسابك، تقييماتك الخاصة، وإعداداتك فتتعامل
            بشكل منفصل داخل التطبيق.
          </p>
        </div>
        <Link className="primary-action compact" href="/privacy">
          اقرأ سياسة الخصوصية
        </Link>
      </section>

      <section className="section delete-section" id="delete-account">
        <div>
          <p className="eyebrow">حذف الحساب</p>
          <h2>تقدر تطلب حذف حسابك وبياناتك من تلعب.</h2>
          <p>
            من داخل التطبيق ادخل على الملف الشخصي، ثم الإعدادات، ثم الحساب،
            واختر حذف الحساب. إذا ما قدرت تدخل للتطبيق، راسلنا من بريدك
            المسجل على support@til3b.com واكتب طلب حذف الحساب.
          </p>
        </div>
        <Link className="secondary-action compact" href="/support">
          تفاصيل الدعم
        </Link>
      </section>

      <section className="section release-section">
        <Image
          src="/tl3b-full-logo.png"
          width={260}
          height={260}
          alt="شعار تلعب"
          unoptimized
        />
        <div>
          <h2>تلعب على iOS و Android والويب.</h2>
          <p>
            هذا الموقع الرسمي لمعلومات التطبيق، سياسة الخصوصية، شروط
            الاستخدام، الدعم، وروابط المراجعة الخاصة بالمتاجر.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <Link className="brand-link footer-brand" href="/">
          <Image src="/tl3b-icon.png" width={42} height={42} alt="" unoptimized />
          <span>تلعب؟</span>
        </Link>
        <div>
          <Link href="/privacy">الخصوصية</Link>
          <Link href="/terms">الشروط</Link>
          <Link href="/support">الدعم</Link>
        </div>
        <p>© 2026 تلعب. جميع الحقوق محفوظة.</p>
      </footer>
    </main>
  );
}
