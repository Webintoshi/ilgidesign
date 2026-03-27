'use client';

import { motion } from 'framer-motion';
import { Palette, Hammer, Headphones, Clock } from 'lucide-react';
import { useParams } from 'next/navigation';

const stats = [
  { value: '20+', labelTr: 'Yıllık Deneyim', labelEn: 'Years Experience' },
  { value: '500+', labelTr: 'Tamamlanan Proje', labelEn: 'Completed Projects' },
  { value: '15+', labelTr: 'Avrupa Ülkesi', labelEn: 'European Countries' },
  { value: '%99', labelTr: 'Müşteri Memnuniyeti', labelEn: 'Client Satisfaction' },
];

const features = [
  { id: 'design', icon: Palette, titleTr: 'Özgün Tasarım', titleEn: 'Unique Design', descTr: 'Her markaya özel, yaratıcı tasarımlar', descEn: 'Creative designs customized for each brand' },
  { id: 'quality', icon: Hammer, titleTr: 'Kaliteli İşçilik', titleEn: 'Quality Work', descTr: 'En iyi malzemeler ve ustalar', descEn: 'Best materials and craftsmen' },
  { id: 'support', icon: Headphones, titleTr: '7/24 Destek', titleEn: '24/7 Support', descTr: 'Kesintisiz teknik destek', descEn: 'Uninterrupted technical support' },
  { id: 'time', icon: Clock, titleTr: 'Zamanında Teslim', titleEn: 'On-Time Delivery', descTr: 'Taahhüt edilen sürede teslim', descEn: 'Delivered on committed time' },
];

export default function WhyUsSection() {
  const params = useParams();
  const locale = (params?.locale as string) || 'tr';

  const translations = {
    tr: { title: 'Neden İlgi Design?', subtitle: 'Fuar standı tasarımında bizi tercih edenlerin nedenleri' },
    en: { title: 'Why İlgi Design?', subtitle: 'Reasons why clients choose us' }
  };
  const t = translations[locale as keyof typeof translations];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-[#009441]/5 transition-colors group">
              <div className="text-4xl sm:text-5xl font-bold text-[#009441] mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-gray-600 font-medium">{locale === 'tr' ? stat.labelTr : stat.labelEn}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#009441]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#009441] transition-colors">
                  <Icon className="w-8 h-8 text-[#009441] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">{locale === 'tr' ? feature.titleTr : feature.titleEn}</h3>
                <p className="text-gray-600 text-sm">{locale === 'tr' ? feature.descTr : feature.descEn}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
