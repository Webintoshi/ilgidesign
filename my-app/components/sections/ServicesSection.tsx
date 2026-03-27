'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TreePine, Boxes, Globe } from 'lucide-react';
import Placeholder from '@/components/Placeholder';
import { useParams } from 'next/navigation';

const services = [
  { id: 'wooden', icon: TreePine, placeholder: 'HIZMET_001', href: 'ahsap-stand' },
  { id: 'maxima', icon: Boxes, placeholder: 'HIZMET_002', href: 'maxima-stand' },
  { id: 'germany', icon: Globe, placeholder: 'HIZMET_003', href: 'almanya-fuar' },
];

export default function ServicesSection() {
  const params = useParams();
  const locale = (params?.locale as string) || 'tr';

  const translations = {
    tr: {
      title: 'Hizmetlerimiz',
      subtitle: 'Markanıza özel, yenilikçi ve etkileyici fuar standı çözümleri',
      wooden: { title: 'Ahşap Stand', desc: 'Doğal ve şık görünümüyle öne çıkan özel ahşap stand tasarımları.' },
      maxima: { title: 'Maxima Stand', desc: 'Modüler ve esnek yapısıyla çok yönlü kullanım sunan Maxima stand sistemleri.' },
      germany: { title: 'Almanya Fuar Standı', desc: 'Avrupa standartlarında, uluslararası fuarlarda profesyonel temsil.' },
      detail: 'Detaylı Bilgi'
    },
    en: {
      title: 'Our Services',
      subtitle: 'Innovative and impressive exhibition stand solutions tailored to your brand',
      wooden: { title: 'Wooden Stand', desc: 'Custom wooden stand designs with natural and elegant appearance.' },
      maxima: { title: 'Maxima Stand', desc: 'Maxima stand systems offering versatile use with modular structure.' },
      germany: { title: 'Germany Exhibition', desc: 'Professional representation at international exhibitions with European standards.' },
      detail: 'Learn More'
    }
  };
  const t = translations[locale as keyof typeof translations];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceData = t[service.id as keyof typeof t] as { title: string; desc: string };
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Placeholder id={service.placeholder} className="w-full h-full" />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-[#009441]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#009441] transition-colors">{serviceData.title}</h3>
                    <p className="text-gray-600 mb-4">{serviceData.desc}</p>
                    <Link href={`/${locale}/hizmetlerimiz/${service.href}/`} className="inline-flex items-center text-[#009441] font-semibold hover:gap-2 transition-all">
                      {t.detail}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
