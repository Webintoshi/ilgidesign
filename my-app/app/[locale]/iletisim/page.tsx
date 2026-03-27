import { MapPin, Phone, Mail, Clock, Send, Building2 } from 'lucide-react';

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const translations = {
    tr: { 
      title: 'İletişim', 
      subtitle: 'Fuar standı projeleriniz için bize ulaşın. Ücretsiz keşif ve fiyat teklifi alın.', 
      formTitle: 'Bize Mesaj Gönderin', 
      name: 'Adınız', 
      surname: 'Soyadınız', 
      email: 'E-posta', 
      phone: 'Telefon', 
      company: 'Firma Adı', 
      details: 'Proje Detayları', 
      send: 'Gönder',
      turkeyOffice: 'Türkiye Ofis',
      germanyOffice: 'Almanya Üretim',
      address: 'Adres',
      phoneLabel: 'Telefon',
      emailLabel: 'E-posta',
      hours: 'Çalışma Saatleri', 
      weekdays: 'Pazartesi - Cuma: 09:00 - 18:00', 
      weekend: 'Cumartesi: 10:00 - 14:00',
      getDirections: 'Yol Tarifi Al'
    },
    en: { 
      title: 'Contact Us', 
      subtitle: 'Get in touch for your exhibition stand projects. Free consultation and quote.', 
      formTitle: 'Send Us a Message', 
      name: 'First Name', 
      surname: 'Last Name', 
      email: 'Email', 
      phone: 'Phone', 
      company: 'Company Name', 
      details: 'Project Details', 
      send: 'Send',
      turkeyOffice: 'Turkey Office',
      germanyOffice: 'Germany Production',
      address: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      hours: 'Working Hours', 
      weekdays: 'Monday - Friday: 09:00 - 18:00', 
      weekend: 'Saturday: 10:00 - 14:00',
      getDirections: 'Get Directions'
    }
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
            {/* Contact Form */}
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

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Turkey Office */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#009441]/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#009441]" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{t.turkeyOffice}</h3>
                </div>
                
                <div className="space-y-4 pl-15">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-[#009441] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">
                        Teyyaredüzü Mah. Şht TGN Bahtiyar Aydın Cad.<br />
                        Demir Sok No: 24/26<br />
                        Merkez / Giresun / Türkiye
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Teyyaredüzü+Mah.+Şht+TGN+Bahtiyar+Aydın+Cad.+Demir+Sok+No:+24/26+Merkez/Giresun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#009441] text-sm mt-2 hover:underline"
                      >
                        {t.getDirections} →
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-[#009441] flex-shrink-0" />
                    <a href="tel:+905433883028" className="text-gray-600 hover:text-[#009441] transition-colors">
                      +90 543 388 30 28
                    </a>
                  </div>
                </div>
              </div>

              {/* Germany Office */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#009441]/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#009441]" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{t.germanyOffice}</h3>
                </div>
                
                <div className="space-y-4 pl-15">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-[#009441] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">
                        Konstantin Str. 107-111<br />
                        41238 Mönchengladbach<br />
                        Deutschland
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Konstantin+Str.+107-111,+41238+Mönchengladbach"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#009441] text-sm mt-2 hover:underline"
                      >
                        {t.getDirections} →
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-[#009441] flex-shrink-0" />
                    <a href="tel:+905549475900" className="text-gray-600 hover:text-[#009441] transition-colors">
                      +90 554 947 59 00
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#009441]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#009441]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.emailLabel}</h3>
                  <a href="mailto:info@ilgidesign.net" className="text-gray-600 hover:text-[#009441] transition-colors">
                    info@ilgidesign.net
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#009441]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#009441]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.hours}</h3>
                  <p className="text-gray-600">{t.weekdays}<br />{t.weekend}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
