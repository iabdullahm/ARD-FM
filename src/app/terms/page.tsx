import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'شروط الاستخدام | Terms of Service',
  description: 'شروط استخدام موقع ومنصة رافد لإدارة المرافق والعقارات.',
  alternates: { canonical: 'https://www.rafidsystem.com/terms' },
};

const SECTIONS = [
  {
    title: '1. قبول الشروط',
    body: 'باستخدامك موقع rafidsystem.com أو منصة رافد فإنك توافق على هذه الشروط. إذا كنت لا توافق عليها فيرجى التوقف عن استخدام الموقع والمنصة.',
  },
  {
    title: '2. الخدمة',
    body: 'رافد منصة سحابية لإدارة المرافق والعقارات تقدمها شركة Creative Techno LLC (س.ت 1390130)، سلطنة عُمان. تُقدَّم الخدمة وفق الباقة المتفق عليها في عقد الاشتراك الخاص بكل عميل.',
  },
  {
    title: '3. الحسابات والاستخدام المقبول',
    body: 'أنت مسؤول عن سرية بيانات دخولك وعن كل نشاط يتم عبر حسابك. يُحظر استخدام المنصة لأي غرض غير قانوني أو محاولة الوصول غير المصرح به لأنظمة أو بيانات الغير.',
  },
  {
    title: '4. النسخة التجريبية (Demo)',
    body: 'تُتاح بيئة تجريبية لأغراض التقييم فقط ببيانات افتراضية. لا نضمن بقاء بيانات النسخة التجريبية، ويجوز إعادة تعيينها في أي وقت دون إشعار.',
  },
  {
    title: '5. ملكية البيانات',
    body: 'تبقى البيانات التي يدخلها العميل في المنصة ملكاً له. يمنح العميل رافد ترخيصاً لمعالجة هذه البيانات حصراً بغرض تقديم الخدمة وتحسينها.',
  },
  {
    title: '6. الملكية الفكرية',
    body: 'جميع حقوق المنصة والموقع والعلامة التجارية "رافد" مملوكة لشركة Creative Techno LLC. لا يجوز نسخ أو إعادة إنتاج أي جزء من المنصة دون إذن كتابي.',
  },
  {
    title: '7. الدفع والاشتراكات',
    body: 'تُحدد الأسعار ودورات الفوترة في صفحة الأسعار أو في عقد الاشتراك. قد تتغير الأسعار مع إشعار مسبق قبل دورة الفوترة التالية.',
  },
  {
    title: '8. حدود المسؤولية',
    body: 'تُقدَّم الخدمة كما هي. لا تتحمل Creative Techno LLC مسؤولية الأضرار غير المباشرة أو التبعية الناتجة عن استخدام الخدمة، وذلك في أقصى حد يسمح به القانون العُماني.',
  },
  {
    title: '9. الإنهاء',
    body: 'يجوز لأي طرف إنهاء الاشتراك وفق أحكام عقد الاشتراك. عند الإنهاء نوفر للعميل تصدير بياناته خلال فترة معقولة قبل حذفها.',
  },
  {
    title: '10. القانون الواجب التطبيق',
    body: 'تخضع هذه الشروط لقوانين سلطنة عُمان، وتختص محاكم مسقط بأي نزاع ينشأ عنها.',
  },
  {
    title: '11. التواصل',
    body: 'لأي استفسار حول هذه الشروط: abdullah.j@creativetechno.net أو هاتفياً على 5614 9297 968+.',
  },
];

export default function TermsPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-[#0B1E3A] via-[#0F172A] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-300 hover:text-[#FF7A00] transition">
            → العودة للرئيسية
          </Link>
          <h1 className="mt-6 text-4xl font-black">شروط الاستخدام</h1>
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
