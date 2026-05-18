export interface BlogPost {
  id: string;
  titleEn: string;
  titleAr: string;
  slugEn: string;
  slugAr: string;
  excerptEn: string;
  excerptAr: string;
  contentEn: string;
  contentAr: string;
  category: 'product-updates' | 'case-studies' | 'industry-insights' | 'best-practices' | 'company-news';
  categoryEn: string;
  categoryAr: string;
  author: string;
  authorRole: string;
  authorImage: string;
  featuredImage: string;
  publishedDate: string;
  readTimeEn: number; // in minutes
  readTimeAr: number;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    titleEn: 'Introducing Rafid Mobile App: Manage Your Properties On The Go',
    titleAr: 'تطبيق رافد موبايل: إدارة عقاراتك أينما كنت',
    slugEn: 'rafid-mobile-app-launch',
    slugAr: 'تطبيق-رافد-موبايل',
    excerptEn:
      'We are excited to announce the launch of the Rafid Mobile App for iOS and Android. Now you can manage your entire property portfolio from your smartphone, anytime, anywhere.',
    excerptAr:
      'يسرنا أن نعلن عن إطلاق تطبيق رافد للموبايل على iOS و Android. يمكنك الآن إدارة محفظة عقاراتك بالكامل من هاتفك الذكي، في أي وقت وأي مكان.',
    contentEn: `## What's New in the Rafid Mobile App

We've been working hard to bring you a seamless mobile experience for property management. The new Rafid Mobile App includes:

### Key Features

- **Real-time Dashboard**: Monitor your properties' key metrics from your pocket
- **Work Order Management**: Create, assign, and track maintenance work orders on the go
- **Tenant Communication**: Stay connected with your tenants through in-app messaging
- **Document Management**: Access important documents and contracts anytime
- **Financial Insights**: Track income and expenses with instant financial reports
- **Offline Mode**: Continue working even without internet connection

### Why We Built This

Our customers told us they needed the ability to manage their properties outside of their office. With the rise of remote work and the need for quick decision-making, a mobile-first approach was essential.

The Rafid Mobile App was built from the ground up with your feedback in mind. Every feature was designed to be intuitive, fast, and reliable.

### Availability

The Rafid Mobile App is now available on:
- **iOS**: Download from App Store
- **Android**: Download from Google Play

### Getting Started

Login with your existing Rafid account and start managing your properties from anywhere. The app syncs in real-time with your web dashboard, so your data is always up-to-date.

We're committed to continuous improvement. Send us your feedback and feature requests directly from the app.

**Download today and experience property management like never before!**`,
    contentAr: `## ما الجديد في تطبيق رافد للموبايل

لقد عملنا بجد لإحضار تجربة موبايل سلسة لإدارة العقارات. يتضمن تطبيق رافد الجديد:

### الميزات الرئيسية

- **لوحة تحكم حية**: راقب مقاييس عقاراتك من جيبك
- **إدارة أوامر العمل**: أنشئ وعيّن وتابع أوامر الصيانة أثناء التنقل
- **التواصل مع المستأجرين**: ابق على اتصال مع مستأجريك من خلال المراسلة في التطبيق
- **إدارة المستندات**: انقل الوثائق المهمة والعقود في أي وقت
- **الرؤى المالية**: تابع الدخل والنفقات مع التقارير المالية الفورية
- **الوضع غير المتصل**: استمر في العمل حتى بدون اتصال إنترنت

### لماذا بنينا هذا

أخبرنا عملاؤنا أنهم يحتاجون إلى القدرة على إدارة عقاراتهم خارج مكتبهم. مع ارتفاع العمل عن بعد والحاجة لاتخاذ قرارات سريعة، كان النهج الموجه للموبايل ضروريًا.

تم بناء تطبيق رافد للموبايل من الألف إلى الياء مع أخذ تعليقاتك في الاعتبار. تم تصميم كل ميزة لتكون حدسية وسريعة وموثوقة.

### التوفر

تطبيق رافد للموبايل متاح الآن على:
- **iOS**: التحميل من App Store
- **Android**: التحميل من Google Play

### البدء

قم بتسجيل الدخول باستخدام حسابك الحالي في رافد وابدأ في إدارة عقاراتك من أي مكان. يتم مزامنة التطبيق في الوقت الفعلي مع لوحة التحكم الخاصة بك على الويب، لذا تكون بياناتك محدثة دائمًا.

نحن ملتزمون بالتحسين المستمر. أرسل لنا ملاحظاتك وطلبات الميزات مباشرة من التطبيق.

**حمل اليوم وجرب إدارة العقارات بطريقة لم تشهدها من قبل!**`,
    category: 'product-updates',
    categoryEn: 'Product Updates',
    categoryAr: 'تحديثات المنتج',
    author: 'Mohammed Al Kindi',
    authorRole: 'Lead Developer',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=1200&h=600&fit=crop&q=80',
    publishedDate: '2024-05-10',
    readTimeEn: 5,
    readTimeAr: 5,
    tags: ['mobile', 'app', 'launch', 'features'],
  },
  {
    id: '2',
    titleEn: 'New AI-Powered Predictive Maintenance Feature',
    titleAr: 'ميزة صيانة تنبؤية قوية الذكاء الاصطناعي',
    slugEn: 'ai-predictive-maintenance',
    slugAr: 'صيانة-تنبؤية-ذكاء-اصطناعي',
    excerptEn:
      'Introducing predictive maintenance powered by artificial intelligence. Detect potential equipment failures before they happen and reduce downtime.',
    excerptAr:
      'تقديم الصيانة التنبؤية المدعومة بالذكاء الاصطناعي. اكتشف الأعطال المحتملة قبل حدوثها وقلل وقت التوقف.',
    contentEn: `## Predictive Maintenance: The Future of Property Management

We're thrilled to announce the release of our AI-powered Predictive Maintenance feature. This groundbreaking technology helps property managers stay ahead of equipment failures and reduce operational costs.

### How It Works

Our machine learning algorithms analyze historical maintenance data, equipment performance metrics, and environmental factors to predict when equipment is likely to fail. This allows you to schedule maintenance before a breakdown occurs.

### Benefits

- **Reduce Emergency Repairs**: Prevent costly emergency repairs by addressing issues proactively
- **Lower Downtime**: Minimize tenant disruptions and lost rental income
- **Cost Savings**: Scheduled maintenance is typically 30-50% cheaper than emergency repairs
- **Extended Equipment Life**: Proper maintenance extends the lifespan of your equipment

### Getting Started

The Predictive Maintenance feature is available now for all enterprise clients. Contact our support team to enable this feature for your account.

This is just the beginning of how AI will transform property management. Stay tuned for more updates!`,
    contentAr: `## الصيانة التنبؤية: مستقبل إدارة العقارات

يسرنا أن نعلن عن إطلاق ميزة الصيانة التنبؤية المدعومة بالذكاء الاصطناعي. تساعد هذه التكنولوجيا الرائدة مديري العقارات على البقاء في الصدارة أمام أعطال المعدات وتقليل التكاليف التشغيلية.

### كيف يعمل

تقوم خوارزميات التعلم الآلي لدينا بتحليل بيانات الصيانة التاريخية ومقاييس أداء المعدات والعوامل البيئية للتنبؤ بموعد احتمال فشل المعدات. يسمح لك هذا بجدولة الصيانة قبل حدوث عطل.

### الفوائد

- **تقليل الإصلاحات الطارئة**: منع إصلاحات الطوارئ المكلفة بمعالجة المشاكل بشكل استباقي
- **تقليل وقت التوقف**: تقليل اضطرابات المستأجرين وخسارة الإيرادات
- **توفير التكاليف**: الصيانة المجدولة عادة ما تكون أرخص بـ 30-50% من إصلاحات الطوارئ
- **إطالة عمر المعدات**: الصيانة السليمة تطيل عمر معداتك

### البدء

ميزة الصيانة التنبؤية متاحة الآن لجميع عملاء المؤسسة. اتصل بفريق الدعم لدينا لتفعيل هذه الميزة على حسابك.

هذا هو البداية فقط لكيفية تحول الذكاء الاصطناعي لإدارة العقارات. ترقب لمزيد من التحديثات!`,
    category: 'product-updates',
    categoryEn: 'Product Updates',
    categoryAr: 'تحديثات المنتج',
    author: 'Abdullah Al Johwari',
    authorRole: 'Founder & CEO',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1485406146926-c627a92ad1ab?w=1200&h=600&fit=crop&q=80',
    publishedDate: '2024-05-15',
    readTimeEn: 6,
    readTimeAr: 6,
    tags: ['AI', 'maintenance', 'predictive', 'technology'],
  },
];

export function getBlogPost(slug: string, lang: 'ar' | 'en'): BlogPost | undefined {
  const slugField = lang === 'ar' ? 'slugAr' : 'slugEn';
  return blogPosts.find((post) => post[slugField as keyof BlogPost] === slug);
}

export function getBlogPostsByCategory(
  category: BlogPost['category'],
): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllCategories() {
  const categories = new Set(blogPosts.map((post) => post.category));
  return Array.from(categories);
}
