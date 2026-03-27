'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight } from 'lucide-react';
import Placeholder from '@/components/Placeholder';
import { useParams } from 'next/navigation';

const logos = ['REF_LOGO_001', 'REF_LOGO_002', 'REF_LOGO_003', 'REF_LOGO_004', 'REF_LOGO_005', 'REF_LOGO_006', 'REF_LOGO_007', 'REF_LOGO_008'];

const testimonials = [
  { textTr: 'İlgi Design ile çalışmak harika bir deneyimdi. Standımız fuarın en dikkat çekici alanlarından biri oldu.', textEn: 'Working with İlgi Design was a great experience. Our stand was one of the most eye-catching areas.', author: 'Ahmet Y.', position: 'Marketing Director', company: 'ABC Company' },
  { textTr: 'Profesyonel yaklaşımları ve yaratıcı tasarımlarıyla sektörün en iyilerinden.', textEn: 'Among the best in the industry with their professional approach and creative designs.', author: 'Mehmet K.', position: 'General Manager', company: 'XYZ Corp' },
  { textTr: 'Ahşap stand tasarımımız hem şık hem de fonksiyonel oldu. Teşekkürler.', textEn: 'Our wooden stand design was both stylish and functional. Thank you.', author: 'Ayşe D.', position: 'Sales Manager', company: 'Premium Co' },
];

export default function ReferencesSection() {
  const params = useParams();
  const locale = (params?.locale as string) || 'tr';

  const translations = {
    tr: { title: 'Referanslarımız', subtitle: 'Bizi tercih eden değerli iş ortaklarımız', testimonials: 'Müşteri Yorumları', allRef: 'Tüm Referanslarımız' },
    en: { title: 'Our References', subtitle: 'Our valued business partners who choose us', testimonials: 'Client Testimonials', allRef: 'All References' }
  };
  const t = translations[locale as keyof typeof translations];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {logos.map((logo, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow group">
              <div className="w-full h-16 relative">
                <Placeholder id={logo} className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-10">{t.testimonials}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <Quote className="w-10 h-10 text-[#009441]/20 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">{locale === 'tr' ? testimonial.textTr : testimonial.textEn}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#009441] text-[#009441]" />)}
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                    <div className="text-sm text-[#009441]">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <Link href={`/${locale}/referanslar/`} className="inline-flex items-center px-8 py-4 bg-[#009441] text-white font-semibold rounded-lg hover:bg-[#007a36] transition-all group">
            {t.allRef}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
