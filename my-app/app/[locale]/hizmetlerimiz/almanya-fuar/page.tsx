import Link from 'next/link';
import Placeholder from '@/components/Placeholder';
import { Globe, Check, ArrowRight, MapPin } from 'lucide-react';

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

const featuresTr = ['Avrupa standartlarına uygun tasarım', 'Almanya ve Avrupa genelinde hizmet', 'Yerinde üretim ve montaj', 'Çok dilli proje yönetimi', 'Lojistik ve nakliye desteği', 'Fuar süresince teknik destek'];
const featuresEn = ['European standards compliant design', 'Service throughout Germany and Europe', 'On-site production and assembly', 'Multilingual project management', 'Logistics and shipping support', 'Technical support during exhibition'];

const locations = ['Hannover', 'Frankfurt', 'Münih', 'Düsseldorf', 'Berlin', 'Köln'];

export default async function AlmanyaFuarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const translations = {
    tr: { title: 'Almanya Fuar Standı', desc: 'Avrupa standartlarında, uluslararası fuarlarda profesyonel temsil.', cta: 'Teklif Al', why: 'Uluslararası Deneyim', features: 'Hizmet Kapsamımız', locations: 'Hizmet Verdiğimiz Fuar Merkezleri', gallery: 'Almanya Projelerimiz' },
    en: { title: 'Germany Exhibition Stand', desc: 'Professional representation at international exhibitions with European standards.', cta: 'Get Quote', why: 'International Experience', features: 'Our Service Scope', locations: 'Exhibition Centers We Serve', gallery: 'Our Germany Projects' }
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
                <Globe className="w-8 h-8 text-[#009441]" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">{t.desc}</p>
              <Link href={`/${locale}/iletisim/`} className="inline-flex items-center px-8 py-4 bg-[#009441] text-white font-semibold rounded-lg hover:bg-[#007a36] transition-colors group">
                {t.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Placeholder id="HIZMET_003" className="w-full h-full" />
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
                  ? 'Almanya, dünyanın en önemli fuar merkezlerine ev sahipliği yapan bir ülkedir. Hannover, Frankfurt, Münih gibi şehirlerde düzenlenen uluslararası fuarlarda Türk firmalarımızı en iyi şekilde temsil ediyoruz.'
                  : 'Germany is a country that hosts the world\'s most important exhibition centers. We represent Turkish companies in the best possible way at international exhibitions held in cities like Hanover, Frankfurt, and Munich.'}
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
          <h2 className="text-3xl font-bold mb-10 text-center">{t.locations}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations.map((city) => (
              <div key={city} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-6 h-6 text-[#009441] mx-auto mb-2" />
                <div className="font-semibold">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">{t.gallery}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {['PROJE_003', 'PROJE_006'].map((id) => (
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
