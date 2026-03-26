import Link from 'next/link';
import Placeholder from '@/components/Placeholder';
import { Boxes, Check, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

const featuresTr = ['Modüler alüminyum profil sistemi', 'Hızlı ve kolay kurulum', 'Yeniden kullanılabilir yapı', 'Esnek tasarım seçenekleri', 'Hafif ve taşınabilir', 'Uygun maliyet'];
const featuresEn = ['Modular aluminum profile system', 'Quick and easy setup', 'Reusable structure', 'Flexible design options', 'Lightweight and portable', 'Cost-effective'];

export default async function MaximaStandPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const translations = {
    tr: { title: 'Maxima Stand', desc: 'Modüler ve esnek yapısıyla çok yönlü kullanım sunan Maxima stand sistemleri.', cta: 'Teklif Al', why: 'Neden Maxima Stand?', features: 'Özellikler', gallery: 'Örnek Projeler' },
    en: { title: 'Maxima Stand', desc: 'Maxima stand systems offering versatile use with modular and flexible structure.', cta: 'Get Quote', why: 'Why Maxima Stand?', features: 'Features', gallery: 'Sample Projects' }
  };
  const t = translations[locale as keyof typeof translations];

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#009441]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href={`/${locale}/hizmetlerimiz/`} className="hover:text-[#009441]">{locale === 'tr' ? 'Hizmetlerimiz' : 'Services'}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#009441]">{t.title}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-[#009441]/10 rounded-2xl flex items-center justify-center mb-6">
                <Boxes className="w-8 h-8 text-[#009441]" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">{t.desc}</p>
              <Link href={`/${locale}/iletisim/`} className="inline-flex items-center px-8 py-4 bg-[#009441] text-white font-semibold rounded-lg hover:bg-[#007a36] transition-colors group">
                {t.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Placeholder id="HIZMET_002" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.why}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {locale === 'tr' 
                  ? 'Maxima stand sistemleri, sık fuara katılan firmalar için ideal bir çözümdür. Modüler yapısı sayesinde her fuarda farklı konfigürasyonlarda kullanılabilir.'
                  : 'Maxima stand systems are an ideal solution for companies that frequently attend exhibitions. Thanks to its modular structure, it can be used in different configurations at each exhibition.'}
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">{t.features}</h3>
              <ul className="space-y-4">
                {(locale === 'tr' ? featuresTr : featuresEn).map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-[#009441] mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">{t.gallery}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['PROJE_002', 'PROJE_005', 'PROJE_008'].map((id) => (
              <div key={id} className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                <Placeholder id={id} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
