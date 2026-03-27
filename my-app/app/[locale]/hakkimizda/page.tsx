import Placeholder from '@/components/Placeholder';
import { PlaceholderTeam } from '@/components/Placeholder';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

const values = [
  { id: 'innovation', icon: Lightbulb, title: 'Yenilikçilik', desc: 'Her projede farklı ve özgün çözümler üretiyoruz.' },
  { id: 'quality', icon: Award, title: 'Kalite', desc: 'En iyi malzemeler ve işçilikle çalışıyoruz.' },
  { id: 'customer', icon: Users, title: 'Müşteri Odaklılık', desc: 'Müşterilerimizin ihtiyaçlarını önceliklendiriyoruz.' },
  { id: 'result', icon: Target, title: 'Sonuç Odaklılık', desc: 'Hedeflerinize ulaşmanız için çalışıyoruz.' },
];

const team = [
  { id: 'EKIP_001', name: '[KURUCU_ADI]', role: 'Kurucu & CEO' },
  { id: 'EKIP_002', name: '[TASARIMCI_ADI]', role: 'Baş Tasarımcı' },
  { id: 'EKIP_003', name: '[PROJE_MUDURU_ADI]', role: 'Proje Müdürü' },
  { id: 'EKIP_004', name: '[UYGULAMA_SORUMLUSU_ADI]', role: 'Uygulama Sorumlusu' },
];

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const translations = {
    tr: { title: 'Hakkımızda', values: 'Değerlerimiz', team: 'Ekibimiz', teamSubtitle: 'Deneyimli ve tutkulu ekibimizle tanışın' },
    en: { title: 'About Us', values: 'Our Values', team: 'Our Team', teamSubtitle: 'Meet our experienced and passionate team' }
  };
  const t = translations[locale as keyof typeof translations];

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{t.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                20 yılı aşkın süredir fuar standı tasarım ve uygulama alanında hizmet veren İlgi Design, 
                markaların fuarlarda en etkileyici şekilde temsil edilmelerini sağlıyor.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Türkiye&apos;nin yanı sıra Almanya ve Avrupa&apos;nın çeşitli ülkelerinde gerçekleştirdiğimiz 
                projelerle uluslararası standartlarda hizmet sunuyoruz. Ahşap stand, Maxima stand ve 
                özel tasarım stand çözümlerimizle sektörün öncü firmaları arasında yer alıyoruz.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Placeholder id="HAKKIMIZDA_001" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.values}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Bizi biz yapan temel prensipler</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.id} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-4 bg-[#009441]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#009441]" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.team}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.teamSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative mb-4 rounded-2xl overflow-hidden aspect-[4/5]">
                  <PlaceholderTeam id={member.id} className="w-full h-full" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-[#009441]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
