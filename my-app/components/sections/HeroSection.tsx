'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Placeholder from '@/components/Placeholder';
import { useParams } from 'next/navigation';

export default function HeroSection() {
  const params = useParams();
  const locale = (params?.locale as string) || 'tr';

  const translations = {
    tr: {
      title: 'Fuar Stand Tasarımında',
      titleHighlight: 'Uzman Çözüm Ortağınız',
      subtitle: '20+ yıllık deneyimimizle markanızı en iyi şekilde temsil eden, akıllıca tasarlanmış fuar standları.',
      ctaProjects: 'Projelerimizi İncele',
      ctaContact: 'Bize Ulaşın',
      scrollDown: 'Keşfet'
    },
    en: {
      title: 'Your Expert Partner in',
      titleHighlight: 'Exhibition Stand Design',
      subtitle: 'With 20+ years of experience, we create intelligently designed exhibition stands that best represent your brand.',
      ctaProjects: 'View Our Projects',
      ctaContact: 'Contact Us',
      scrollDown: 'Explore'
    }
  };
  const t = translations[locale as keyof typeof translations];

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        <Placeholder 
          id="HERO_BANNER_001" 
          width={1920} 
          height={1080} 
          className="w-full h-full"
          showLabel={false}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-[#009441] rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-white/90">Premium Exhibition Design</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              {t.title}
              <span className="block text-[#009441] mt-2">{t.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href={`/${locale}/projeler/`} 
                className="inline-flex items-center px-8 py-4 bg-[#009441] text-white font-semibold rounded-lg hover:bg-[#007a36] transition-all hover:shadow-lg hover:shadow-[#009441]/30 hover:scale-105 group"
              >
                {t.ctaProjects}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href={`/${locale}/iletisim/`} 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all"
              >
                {t.ctaContact}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a 
          href="#services" 
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-sm font-medium mb-2 tracking-wider uppercase">{t.scrollDown}</span>
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2 group-hover:border-white/50 transition-colors">
            <motion.div 
              animate={{ y: [0, 12, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#009441] rounded-full"
            />
          </div>
          <ChevronDown className="w-5 h-5 mt-1 animate-bounce" />
        </a>
      </motion.div>

      {/* Stats Bar - Floating */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 sm:pb-24">
          <div className="flex flex-wrap justify-start gap-8 sm:gap-12">
            {[
              { value: '20+', label: locale === 'tr' ? 'Yıllık Deneyim' : 'Years Experience' },
              { value: '500+', label: locale === 'tr' ? 'Proje' : 'Projects' },
              { value: '99%', label: locale === 'tr' ? 'Memnuniyet' : 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-[#009441]">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-32 right-8 w-32 h-32 border-t-2 border-r-2 border-white/10 rounded-tr-3xl hidden lg:block" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border-b-2 border-r-2 border-[#009441]/30 rounded-br-2xl hidden lg:block" />
    </section>
  );
}
