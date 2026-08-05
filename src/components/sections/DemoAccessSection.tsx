'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, Phone, Building2, User, MessageSquare, Zap } from 'lucide-react';

interface DemoAccessSectionProps {
  lang?: 'ar' | 'en';
}

export function DemoAccessSection({ lang = 'ar' }: DemoAccessSectionProps) {
  const isArabic = lang === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError(isArabic ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(isArabic ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email');
      setIsLoading(false);
      return;
    }

    try {
      // Send to email (using FormSubmit or similar service)
      const response = await fetch('https://formspree.io/f/mzbnblrj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          language: isArabic ? 'Arabic' : 'English',
          source: 'Demo Access Form',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(isArabic ? 'حدث خطأ ما. يرجى المحاولة مجددًا' : 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(isArabic ? 'حدث خطأ في الاتصال. يرجى المحاولة مجددًا' : 'Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = isArabic
    ? [
        'وصول فوري للنظام',
        'بيانات تجريبية حقيقية',
        'دعم فني 24/7',
        'لا حاجة لبطاقة ائتمان',
      ]
    : [
        'Instant System Access',
        'Real Demo Data',
        '24/7 Technical Support',
        'No Credit Card Required',
      ];

  return (
    <section id="demo-access" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits & Info */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-block mb-4 px-4 py-2 bg-orange-100 rounded-full">
                <span className="text-sm font-semibold text-slate-700">
                  {isArabic ? 'جرب النظام الآن' : 'Try Now'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {isArabic ? 'احصل على وصول مجاني للـ Demo' : 'Get Free Demo Access'}
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                {isArabic
                  ? 'اختبر نظام رافد بدون التزام. وصول فوري، بيانات حقيقية، ودعم فني كامل'
                  : 'Test Rafid risk-free. Instant access, real data, and full technical support'}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: isArabic ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF7A00] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <div className="text-2xl font-bold text-orange-900 mb-1">24/7</div>
                <p className="text-sm text-orange-700">
                  {isArabic ? 'دعم فني متواصل' : 'Technical Support'}
                </p>
              </div>
              <div className="p-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg">
                <div className="text-2xl font-bold text-slate-900 mb-1">AR/EN</div>
                <p className="text-sm text-slate-600">
                  {isArabic ? 'واجهة ثنائية اللغة' : 'Bilingual Interface'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-100">
              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900">
                      {isArabic ? 'تم بنجاح!' : 'Success!'}
                    </p>
                    <p className="text-sm text-green-700">
                      {isArabic
                        ? 'سيتم إرسال رابط الوصول إلى بريدك الإلكتروني قريباً'
                        : 'Demo access link will be sent to your email shortly'}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                >
                  <div className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5">⚠️</div>
                  <p className="text-sm text-red-700">{error}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {isArabic ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <User className={`absolute top-3.5 w-5 h-5 text-slate-400 ${isArabic ? "right-3" : "left-3"}`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      className={`w-full ${isArabic ? "pr-10 pl-4" : "pl-10 pr-4"} py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition`}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {isArabic ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <div className="relative">
                    <Mail className={`absolute top-3.5 w-5 h-5 text-slate-400 ${isArabic ? "right-3" : "left-3"}`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'your@email.com'}
                      className={`w-full ${isArabic ? "pr-10 pl-4" : "pl-10 pr-4"} py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition`}
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {isArabic ? 'رقم الهاتف *' : 'Phone Number *'}
                  </label>
                  <div className="relative">
                    <Phone className={`absolute top-3.5 w-5 h-5 text-slate-400 ${isArabic ? "right-3" : "left-3"}`} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={isArabic ? '+968 xxxx xxxx' : '+1 (555) 000-0000'}
                      className={`w-full ${isArabic ? "pr-10 pl-4" : "pl-10 pr-4"} py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition`}
                      required
                    />
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {isArabic ? 'اسم الشركة' : 'Company Name'}
                  </label>
                  <div className="relative">
                    <Building2 className={`absolute top-3.5 w-5 h-5 text-slate-400 ${isArabic ? "right-3" : "left-3"}`} />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={isArabic ? 'اسم شركتك' : 'Your company name'}
                      className={`w-full ${isArabic ? "pr-10 pl-4" : "pl-10 pr-4"} py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition`}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {isArabic ? 'رسالة إضافية' : 'Additional Message'}
                  </label>
                  <div className="relative">
                    <MessageSquare className={`absolute top-3.5 w-5 h-5 text-slate-400 ${isArabic ? "right-3" : "left-3"}`} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={isArabic ? 'أخبرنا عن احتياجاتك...' : 'Tell us about your needs...'}
                      rows={3}
                      className={`w-full ${isArabic ? "pr-10 pl-4" : "pl-10 pr-4"} py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-[#FF7A00] text-white font-semibold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Zap className="w-5 h-5" />
                  {isLoading
                    ? isArabic
                      ? 'جاري الإرسال...'
                      : 'Sending...'
                    : isArabic
                      ? 'احصل على وصول الـ Demo'
                      : 'Get Demo Access'}
                </motion.button>

                {/* Privacy Notice */}
                <p className="text-xs text-slate-500 text-center">
                  {isArabic
                    ? 'نحن نحترم خصوصيتك. لن نشارك بياناتك مع أي جهة ثالثة'
                    : 'We respect your privacy. Your information will never be shared'}
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
