'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const params = useParams();
  const locale = (params?.locale as string) || 'tr';
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: `/${locale}/`, label: locale === 'tr' ? 'Ana Sayfa' : 'Home' },
    { href: `/${locale}/hakkimizda/`, label: locale === 'tr' ? 'Hakkımızda' : 'About Us' },
    {
      href: `/${locale}/hizmetlerimiz/`,
      label: locale === 'tr' ? 'Hizmetlerimiz' : 'Services',
      children: [
        { href: `/${locale}/hizmetlerimiz/ahsap-stand/`, label: 'Ahşap Stand' },
        { href: `/${locale}/hizmetlerimiz/maxima-stand/`, label: 'Maxima Stand' },
        { href: `/${locale}/hizmetlerimiz/almanya-fuar/`, label: locale === 'tr' ? 'Almanya Fuar Standı' : 'Germany Exhibition' },
      ]
    },
    { href: `/${locale}/projeler/`, label: locale === 'tr' ? 'Projeler' : 'Projects' },
    { href: `/${locale}/referanslar/`, label: locale === 'tr' ? 'Referanslar' : 'References' },
    { href: `/${locale}/iletisim/`, label: locale === 'tr' ? 'İletişim' : 'Contact' },
  ];

  const toggleLocale = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={`/${locale}/`} className="flex items-center">
              <Image
                src="/images/ilgi-design-logo.webp"
                alt="İlgi Design"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  {item.children ? (
                    <button
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                        isScrolled ? 'text-gray-700 hover:text-[#009441]' : 'text-gray-700 hover:text-[#009441]'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors ${
                        isScrolled ? 'text-gray-700 hover:text-[#009441]' : 'text-gray-700 hover:text-[#009441]'
                      } ${pathname === item.href ? 'text-[#009441]' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                  
                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#009441]/5 hover:text-[#009441]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLocale}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition-colors ${
                  isScrolled 
                    ? 'border-gray-200 hover:border-[#009441]' 
                    : 'border-gray-200 hover:border-[#009441]'
                }`}
              >
                <span className="text-lg">{locale === 'tr' ? '🇹🇷' : '🇬🇧'}</span>
                <span className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
                  {locale === 'tr' ? 'TR' : 'EN'}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="p-6 pt-24">
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      {item.children ? (
                        <div className="space-y-2">
                          <span className="block text-sm font-medium text-gray-500 uppercase tracking-wider">
                            {item.label}
                          </span>
                          <div className="pl-4 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-gray-700 hover:text-[#009441]"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-lg font-medium text-gray-900 hover:text-[#009441]"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
