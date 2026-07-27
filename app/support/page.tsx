import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "الدعم | تلعب",
  description: "الدعم وطريقة حذف الحساب في تطبيق تلعب.",
};

const supportItems = [
  {
    title: "مساعدة الحساب",
    text: "تسجيل الدخول، الملف الشخصي، إعدادات الخصوصية، وتعديل بيانات الحساب.",
  },
  {
    title: "مشاكل المباريات",
    text: "إنشاء مباراة، الدعوات، طلبات الانضمام، تبديل لاعب، أو تنبيهات الوقت.",
  },
  {
    title: "الخصوصية والأمان",
    text: "ظهور البيانات، الإشعارات، الصور المرفوعة، وحذف الحساب أو البيانات.",
  },
];

export default function SupportPage() {
  return (
    <main>
      <nav className="site-nav legal-nav" aria-label="التنقل الرئيسي">
        <Link className="brand-link" href="/">
          <Image
            src="/tl3b-full-logo.png"
            width={96}
            height={96}
            alt="شعار تلعب"
            unoptimized
          />
        </Link>
        <div className="nav-links">
          <Link href="/">الرئيسية</Link>
          <Link href="/privacy">الخصوصية</Link>
          <Link href="/terms">الشروط</Link>
        </div>
      </nav>

      <section className="support-hero">
        <p className="eyebrow">الدعم</p>
        <h1>نساعدك في أي مشكلة داخل تلعب.</h1>
        <p>
          أرسل لنا البريد المرتبط بحسابك، شرح مختصر للمشكلة، وصور توضيحية إذا
          كانت تساعد. فريق الدعم يراجع الطلب ويرد عليك بأقرب وقت ممكن.
        </p>
        <a className="primary-action" href="mailto:support@til3b.com">
          راسل support@til3b.com
        </a>
      </section>

      <section className="section support-grid">
        {supportItems.map((item) => (
          <article className="feature-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section delete-section">
        <div>
          <p className="eyebrow">طريقة حذف الحساب</p>
          <h2>من داخل التطبيق</h2>
          <p>
            افتح تلعب، ادخل على الملف الشخصي، اختر الإعدادات، ثم الحساب، واضغط
            حذف الحساب. بعد التأكيد يبدأ طلب حذف الحساب والبيانات المرتبطة به.
          </p>
        </div>
        <div className="delete-steps">
          <span>١</span>
          <strong>الملف الشخصي</strong>
          <span>٢</span>
          <strong>الإعدادات</strong>
          <span>٣</span>
          <strong>الحساب ثم حذف الحساب</strong>
        </div>
      </section>

      <section className="section privacy-preview">
        <div>
          <p className="eyebrow">إذا ما تقدر تدخل للتطبيق</p>
          <h2>اطلب الحذف عن طريق البريد.</h2>
          <p>
            راسلنا من البريد المسجل في حسابك على support@til3b.com، واكتب اسم
            المستخدم أو رقم الهاتف المرتبط بالحساب حتى نتحقق من الطلب.
          </p>
        </div>
        <div className="policy-links">
          <Link href="/privacy">سياسة الخصوصية</Link>
          <Link href="/terms">شروط الاستخدام</Link>
        </div>
      </section>
    </main>
  );
}
