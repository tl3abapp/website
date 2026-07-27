import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "شروط الاستخدام | تلعب",
  description: "شروط استخدام تطبيق تلعب.",
};

export default function TermsPage() {
  return (
    <main>
      <nav className="site-nav legal-nav" aria-label="التنقل الرئيسي">
        <Link className="brand-link" href="/">
          <Image
            src="/tl3b-icon.png"
            width={48}
            height={48}
            alt="أيقونة تلعب"
            unoptimized
          />
          <span>تلعب؟</span>
        </Link>
        <div className="nav-links">
          <Link href="/">الرئيسية</Link>
          <Link href="/privacy">الخصوصية</Link>
          <Link href="/support">الدعم</Link>
        </div>
      </nav>

      <article className="legal-page">
        <p className="eyebrow">آخر تحديث: ٢٧ يوليو ٢٠٢٦</p>
        <h1>شروط الاستخدام</h1>
        <p className="legal-lead">
          هذه الشروط توضح قواعد استخدام تلعب. باستخدامك للتطبيق أو الموقع، فإنك
          توافق على استخدام الخدمة بطريقة مسؤولة.
        </p>

        <section>
          <h2>استخدام تلعب</h2>
          <p>
            يتيح لك تلعب إنشاء مباريات، دعوة لاعبين، طلب الانضمام للمباريات
            العامة، إدارة المشاركين، النشر في المجتمع، والتواصل حول المباريات.
            أنت مسؤول عن صحة المعلومات التي تقدمها.
          </p>
        </section>

        <section>
          <h2>الحساب والسلوك</h2>
          <p>
            حافظ على أمان حسابك ولا تستخدم حساب شخص آخر. يمنع التحرش،
            الانتحال، الرسائل المزعجة، رفع محتوى ضار، أو استخدام تلعب بطريقة
            تضر اللاعبين أو الخدمة.
          </p>
        </section>

        <section>
          <h2>المباريات والسلامة</h2>
          <p>
            الهوست واللاعبون مسؤولون عن تأكيد حجز الملعب، الدفع، الحضور، وأي
            ترتيبات واقعية أخرى. تلعب يساعد على التنسيق ولا يدير الملاعب أو
            يضمن حضور اللاعبين.
          </p>
        </section>

        <section>
          <h2>المحتوى</h2>
          <p>
            أنت تملك المحتوى الذي ترفعه مثل المنشورات، الرسائل، الصور الشخصية،
            وصور الحجوزات. أنت تمنح تلعب إذنًا لحفظ وعرض ومعالجة هذا المحتوى
            بما يلزم لتشغيل الخدمة.
          </p>
        </section>

        <section>
          <h2>تغيير الخدمة</h2>
          <p>
            قد نقوم بتحديث أو تحسين أو إيقاف أجزاء من الخدمة. وقد نعلق الحسابات
            التي تخالف هذه الشروط أو تسبب خطرًا على المستخدمين.
          </p>
        </section>

        <section>
          <h2>التواصل</h2>
          <p>
            لأي سؤال عن هذه الشروط، تواصل معنا عبر{" "}
            <a href="mailto:support@til3b.com">support@til3b.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
