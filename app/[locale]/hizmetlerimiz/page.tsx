import Link from 'next/link';
import Placeholder from '@/components/Placeholder';
import { ArrowRight, TreePine, Boxes, Globe, Check } from 'lucide-react';

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

const services = [
  { id: 'ahsap', icon: TreePine, placeholder: 'HIZMET_001', titleTr: 'Ahşap Stand', titleEn: 'Wooden Stand', descTr: 'Doğal ve şık görünümüyle öne çıkan özel ahşap stand tasarımları.', descEn: 'Custom wooden stand designs with natural and elegant appearance.', href: 'ahsap-stand', featuresTr: ['Özel tasarım', 'Doğal malzemeler', 'Dayanıklı yapı', 'Sıcak atmosfer'], featuresEn: ['Custom design', 'Natural materials', 'Durable structure', 'Warm atmosphere'] },
  { id: 'maxima', icon: Boxes, placeholder: 'HIZMET_002', titleTr: 'Maxima Stand', titleEn: 'Maxima Stand', descTr: 'Modüler ve esnek yapısıyla çok yönlü kullanım sunan sistem.', descEn: 'System offering versatile use with modular and flexible structure.', href: 'maxima-stand', featuresTr: ['Modüler yapı', 'Hızlı kurulum', 'Yeniden kullanılabilir', 'Esnek tasarım'], featuresEn: ['Modular structure', 'Quick setup', 'Reusable', 'Flexible design'] },
  { id: 'almanya', icon: Globe, placeholder: 'HIZMET_003', titleTr: 'Almanya Fuar Standı', titleEn: 'Germany Exhibition', descTr: 'Avrupa standartlarında uluslararası fuar çözümleri.', descEn: 'International exhibition solutions with European standards.', href: 'almanya-fuar', featuresTr: ['Avrupa standartları', 'Yerinde montaj', 'Tam hizmet', 'Global deneyim'], featuresEn: ['European standards', 'On-site assembly', 'Full service', 'Global experience'] },
];

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const translations = {
    tr: { title: 'Hizmetlerimiz', subtitle: 'Fuar standı tasarımında ihtiyaçlarınıza özel çözümler sunuyoruz.' },
    en: { title: 'Our Services', subtitle: 'We offer customized solutions for your exhibition stand needs.' }
  };
  const t = translations[locale as keyof typeof translations];

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;
            return (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <Placeholder id={service.placeholder} className="w-full h-full" />
                  </div>
                </div>
                <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="w-14 h-14 bg-[#009441]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#009441]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{locale === 'tr' ? service.titleTr : service.titleEn}</h2>
                  <p className="text-gray-600 text-lg mb-6">{locale === 'tr' ? service.descTr : service.descEn}</p>
                  <ul className="space-y-3 mb-8">
                    {(locale === 'tr' ? service.featuresTr : service.featuresEn).map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 text-[#009441] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${locale}/hizmetlerimiz/${service.href}/`} className="inline-flex items-center px-6 py-3 bg-[#009441] text-white font-semibold rounded-lg hover:bg-[#007a36] transition-colors group">
                    {locale === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
