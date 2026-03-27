import Placeholder from '@/components/Placeholder';
import { Star, Quote } from 'lucide-react';

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

const logos = ['REF_LOGO_001', 'REF_LOGO_002', 'REF_LOGO_003', 'REF_LOGO_004', 'REF_LOGO_005', 'REF_LOGO_006', 'REF_LOGO_007', 'REF_LOGO_008', 'REF_LOGO_001', 'REF_LOGO_002', 'REF_LOGO_003', 'REF_LOGO_004'];

const testimonials = [
  { textTr: 'İlgi Design ile çalışmak harika bir deneyimdi. Standımız fuarın en dikkat çekici alanlarından biri oldu.', textEn: 'Working with İlgi Design was a great experience. Our stand was one of the most eye-catching areas.', author: 'Ahmet Y.', position: 'Marketing Director', company: 'ABC Company' },
  { textTr: 'Profesyonel yaklaşımları ve yaratıcı tasarımlarıyla sektörün en iyilerinden.', textEn: 'Among the best in the industry with their professional approach and creative designs.', author: 'Mehmet K.', position: 'General Manager', company: 'XYZ Corp' },
  { textTr: 'Ahşap stand tasarımımız hem şık hem de fonksiyonel oldu. Teşekkürler.', textEn: 'Our wooden stand design was both stylish and functional. Thank you.', author: 'Ayşe D.', position: 'Sales Manager', company: 'Premium Co' },
  { textTr: 'Maxima stand sistemimiz her fuarda farklı konfigürasyonlarda kullanılabiliyor.', textEn: 'Our Maxima stand system can be used in different configurations at each exhibition.', author: 'Can Ö.', position: 'Exhibition Manager', company: 'Delta Products' },
  { textTr: 'Zamanında teslimat, kaliteli işçilik ve uygun fiyat. Teşekkürler.', textEn: 'On-time delivery, quality workmanship and reasonable price. Thank you.', author: 'Elif Y.', position: 'Brand Manager', company: 'Omega Group' },
  { textTr: 'Tasarım aşamasından fuar sonuna kadar yanınızda olan profesyonel bir ekip.', textEn: 'A professional team that stands by you from the design phase to the end of the exhibition.', author: 'Burak Ş.', position: 'Export Manager', company: 'Epsilon Ltd.' },
];

export default async function ReferencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const translations = {
    tr: { title: 'Referanslarımız', subtitle: 'Bizi tercih eden değerli iş ortaklarımız.', partners: 'İş Ortaklarımız', testimonials: 'Müşteri Yorumları' },
    en: { title: 'Our References', subtitle: 'Our valued business partners who choose us.', partners: 'Our Partners', testimonials: 'Client Testimonials' }
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

      <section className="py-16 bg-[#009441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div><div className="text-4xl font-bold mb-2">500+</div><div className="text-white/80">{locale === 'tr' ? 'Tamamlanan Proje' : 'Completed Projects'}</div></div>
            <div><div className="text-4xl font-bold mb-2">200+</div><div className="text-white/80">{locale === 'tr' ? 'Mutlu Müşteri' : 'Happy Clients'}</div></div>
            <div><div className="text-4xl font-bold mb-2">20+</div><div className="text-white/80">{locale === 'tr' ? 'Yıllık Deneyim' : 'Years Experience'}</div></div>
            <div><div className="text-4xl font-bold mb-2">99%</div><div className="text-white/80">{locale === 'tr' ? 'Memnuniyet' : 'Satisfaction'}</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">{t.partners}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {logos.map((logo, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow">
                <Placeholder id={logo} className="w-full h-full opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t.testimonials}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <Quote className="w-10 h-10 text-[#009441]/20 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">{locale === 'tr' ? testimonial.textTr : testimonial.textEn}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#009441] text-[#009441]" />)}
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                    <div className="text-sm text-[#009441]">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
