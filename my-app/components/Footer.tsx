'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Phone, Mail, MapPin, ArrowUp, Globe, Share2, Building2 } from 'lucide-react';

export default function Footer() {
  const params = useParams();
  const locale = (params?.locale as string) || 'tr';
  const currentYear = new Date().getFullYear();

  const t = {
    description: locale === 'tr' 
      ? 'Fuar standı tasarım ve uygulama alanında 20+ yıllık deneyim. Markanızı en iyi şekilde temsil eden çözümler.'
      : '20+ years of experience in exhibition stand design and implementation. Solutions that best represent your brand.',
    quickLinks: locale === 'tr' ? 'Hızlı Linkler' : 'Quick Links',
    services: locale === 'tr' ? 'Hizmetler' : 'Services',
    contact: locale === 'tr' ? 'İletişim' : 'Contact',
    rights: locale === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.',
    turkeyOffice: locale === 'tr' ? 'Türkiye Ofis' : 'Turkey Office',
    germanyOffice: locale === 'tr' ? 'Almanya Üretim' : 'Germany Production',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href={`/${locale}/`} className="flex items-center">
              <Image
                src="/images/ilgi-design-logo.webp"
                alt="İlgi Design"
                width={180}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#009441] transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#009441] transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {[
                { href: `/${locale}/`, label: locale === 'tr' ? 'Ana Sayfa' : 'Home' },
                { href: `/${locale}/hakkimizda/`, label: locale === 'tr' ? 'Hakkımızda' : 'About Us' },
                { href: `/${locale}/projeler/`, label: locale === 'tr' ? 'Projeler' : 'Projects' },
                { href: `/${locale}/referanslar/`, label: locale === 'tr' ? 'Referanslar' : 'References' },
                { href: `/${locale}/iletisim/`, label: locale === 'tr' ? 'İletişim' : 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-[#009441] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.services}</h3>
            <ul className="space-y-3">
              {[
                { href: `/${locale}/hizmetlerimiz/ahsap-stand/`, label: 'Ahşap Stand' },
                { href: `/${locale}/hizmetlerimiz/maxima-stand/`, label: 'Maxima Stand' },
                { href: `/${locale}/hizmetlerimiz/almanya-fuar/`, label: locale === 'tr' ? 'Almanya Fuar Standı' : 'Germany Exhibition' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-[#009441] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.contact}</h3>
            <ul className="space-y-6">
              {/* Turkey Office */}
              <li className="space-y-2">
                <div className="flex items-center gap-2 text-[#009441] font-medium text-sm">
                  <Building2 className="w-4 h-4" />
                  {t.turkeyOffice}
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Teyyaredüzü Mah. Şht TGN Bahtiyar Aydın Cad.<br />
                    Demir Sok No: 24/26<br />
                    Merkez / Giresun
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <a href="tel:+905433883028" className="text-gray-400 text-sm hover:text-[#009441] transition-colors">
                    +90 543 388 30 28
                  </a>
                </div>
              </li>

              {/* Germany Office */}
              <li className="space-y-2 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#009441] font-medium text-sm">
                  <Building2 className="w-4 h-4" />
                  {t.germanyOffice}
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Konstantin Str. 107-111<br />
                    41238 Mönchengladbach
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <a href="tel:+905549475900" className="text-gray-400 text-sm hover:text-[#009441] transition-colors">
                    +90 554 947 59 00
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#009441] flex-shrink-0" />
                  <a href="mailto:info@ilgidesign.net" className="text-gray-400 text-sm hover:text-[#009441] transition-colors">
                    info@ilgidesign.net
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} İlgi Design. {t.rights}
            </p>
            
            {/* Celebix Signature */}
            <a 
              href="https://celebix.co/tr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
            >
              <Image
                src="https://celebix.co/Logo/koyu%20logo.svg"
                alt="Celebix"
                width={120}
                height={36}
                className="h-8 w-auto brightness-200 opacity-60 group-hover:opacity-100 transition-all duration-300"
              />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-[#009441] transition-colors"
            >
              <span className="text-sm">{locale === 'tr' ? 'Yukarı Çık' : 'Back to Top'}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
