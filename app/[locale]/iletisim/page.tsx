import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const translations = {
    tr: { title: 'İletişim', subtitle: 'Fuar standı projeleriniz için bize ulaşın. Ücretsiz keşif ve fiyat teklifi alın.', formTitle: 'Bize Mesaj Gönderin', name: 'Adınız', surname: 'Soyadınız', email: 'E-posta', phone: 'Telefon', company: 'Firma Adı', details: 'Proje Detayları', send: 'Gönder', address: 'Adres', hours: 'Çalışma Saatleri', weekdays: 'Pazartesi - Cuma: 09:00 - 18:00', weekend: 'Cumartesi: 10:00 - 14:00', map: '[HARITA_GORSELI_EKLENECEK]' },
    en: { title: 'Contact Us', subtitle: 'Get in touch for your exhibition stand projects. Free consultation and quote.', formTitle: 'Send Us a Message', name: 'First Name', surname: 'Last Name', email: 'Email', phone: 'Phone', company: 'Company Name', details: 'Project Details', send: 'Send', address: 'Address', hours: 'Working Hours', weekdays: 'Monday - Friday: 09:00 - 18:00', weekend: 'Saturday: 10:00 - 14:00', map: '[MAP_IMAGE_TO_BE_ADDED]' }
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">{t.formTitle}</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.name}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#009441] focus:ring-2 focus:ring-[#009441]/20 outline-none transition-all" placeholder={t.name} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.surname}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#009441] focus:ring-2 focus:ring-[#009441]/20 outline-none transition-all" placeholder={t.surname} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#009441] focus:ring-2 focus:ring-[#009441]/20 outline-none transition-all" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.phone}</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#009441] focus:ring-2 focus:ring-[#009441]/20 outline-none transition-all" placeholder="+90 5XX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.company}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#009441] focus:ring-2 focus:ring-[#009441]/20 outline-none transition-all" placeholder={t.company} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.details}</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#009441] focus:ring-2 focus:ring-[#009441]/20 outline-none transition-all resize-none" placeholder={t.details} />
                </div>
                <button type="submit" className="w-full flex items-center justify-center px-8 py-4 bg-[#009441] text-white font-semibold rounded-lg hover:bg-[#007a36] transition-colors group">
                  {t.send}
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#009441]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#009441]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.address}</h3>
                  <p className="text-gray-600">İstanbul, Türkiye<br />[ADRES_BILGISI_EKLENECEK]</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#009441]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#009441]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a href="tel:+901234567890" className="text-gray-600 hover:text-[#009441] transition-colors">[TELEFON_NUMARASI]</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#009441]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#009441]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:info@ilgidesign.com" className="text-gray-600 hover:text-[#009441] transition-colors">info@ilgidesign.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#009441]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#009441]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.hours}</h3>
                  <p className="text-gray-600">{t.weekdays}<br />{t.weekend}</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">{t.map}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
