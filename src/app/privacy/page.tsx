import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | Privacy Policy',
  description: 'سياسة الخصوصية لنظام رافد لإدارة المرافق والعقارات — كيف نجمع بياناتك ونحميها ونستخدمها.',
  alternates: { canonical: 'https://www.rafidsystem.com/privacy' },
};

const SECTIONS = [
  {
    title: '1. المقدمة',
    body: 'تلتزم شركة Creative Techno LLC (س.ت 1390130)، المالكة والمشغّلة لنظام رافد، بحماية خصوصية زوّار موقعها ومستخدمي منصتها. توضح هذه السياسة أنواع البيانات التي نجمعها وكيفية استخدامها وحمايتها.',
  },
  {
    title: '2. البيانات التي نجمعها',
    body: 'عند تعبئة نماذج التواصل أو طلب العرض التجريبي نجمع: الاسم، اسم الشركة، البريد الإلكتروني، رقم الهاتف، وأي ملاحظات تقدمها طوعاً. وعند استخدام منصة رافد نعالج بيانات العقارات والعقود والصيانة التي يدخلها المستخدم لأغراض تشغيل الخدمة فقط.',
  },
  {
    title: '3. كيفية استخدام البيانات',
    body: 'نستخدم بيانات التواصل للرد على استفساراتك وترتيب العروض التجريبية وإرسال التحديثات التي طلبتها. لا نبيع بياناتك ولا نشاركها مع أطراف ثالثة لأغراض تسويقية.',
  },
  {
    title: '4. معالجة النماذج',
    body: 'تُعالج نماذج الموقع عبر مزود خدمة النماذج Formspree، وتخضع معالجتها لسياسة خصوصية المزود. تصل بيانات النموذج مباشرة إلى بريد فريق رافد.',
  },
  {
    title: '5. حماية البيانات',
    body: 'نطبق تشفير AES-256 للبيانات أثناء النقل والتخزين داخل منصة رافد، مع صلاحيات وصول دقيقة وسجل تدقيق للتعديلات، ونسخ احتياطي دوري.',
  },
  {
    title: '6. ملفات الارتباط (Cookies)',
    body: 'يستخدم الموقع ملفات ارتباط تقنية ضرورية لعمل الموقع (مثل تفضيل اللغة). لا نستخدم حالياً ملفات ارتباط إعلانية أو تتبعاً عبر مواقع أخرى.',
  },
  {
    title: '7. حقوقك',
    body: 'يحق لك طلب الاطلاع على بياناتك الشخصية لدينا أو تصحيحها أو حذفها في أي وقت عبر التواصل معنا على البريد أدناه.',
  },
  {
    title: '8. التواصل',
    body: 'لأي استفسار حول هذه السياسة: abdullah.j@creativetechno.net أو هاتفياً على 5614 9297 968+.',
  },
];

export default function PrivacyPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-[#0B1E3A] via-[#0F172A] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-300 hover:text-[#FF7A00] transition">
            → العودة للرئيسية
          </Link>
          <h1 className="mt-6 text-4xl font-black">سياسة الخصوصية</h1>
          <p className="mt-3 text-slate-300">آخر تحديث: 19 يوليو 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h2>
              <p className="text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
