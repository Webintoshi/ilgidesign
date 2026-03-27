'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Building2, 
  MapPin, 
  Calendar, 
  Ruler, 
  Tag,
  Lightbulb,
  Wrench,
  Trophy,
  Hammer,
  Monitor,
  Lamp,
  ArrowRight,
  X
} from 'lucide-react';
import Placeholder from '@/components/Placeholder';
import { useState } from 'react';

// Translation types
interface ProjectTranslations {
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  size: string;
  challenge: string;
  solution: string;
  result: string;
  specs: {
    materials: string[];
    equipment: string[];
    flooring: string[];
    lighting: string[];
  };
}

interface ProjectDataType {
  id: string;
  slug: string;
  tr: ProjectTranslations;
  en: ProjectTranslations;
}

// Mock project data - Gerçek veri API'den gelecek
const projectData: ProjectDataType = {
  id: 'prestij-ahsap-stand',
  slug: 'prestij-ahsap-stand',
  tr: {
    title: 'Prestij Ahşap Stand',
    category: 'Ahşap Stand',
    client: 'ABC Gıda',
    location: 'İstanbul',
    year: '2024',
    size: '36m²',
    challenge: 'Müşteri, fuar alanında doğal ve premium bir imaj yaratmak istiyordu. Geleneksel stand tasarımlarından farklı, sıcak bir atmosfer oluşturma hedefi vardı.',
    solution: 'Doğal masif meşe ağacı kullanarak özel tasarım bir stand oluşturduk. Ahşabın doğal dokusunu ön plana çıkaran, modern çizgilerle harmanlanmış bir konsept geliştirdik.',
    result: 'Stand, fuarın en çok ziyaret edilen alanlarından biri oldu. Müşteri memnuniyeti %95+ olarak gerçekleşti ve 3 yeni iş anlaşması sağlandı.',
    specs: {
      materials: ['Masif Meşe', 'MDF Lake', 'Alüminyum Profil'],
      equipment: ['55" TV Ekran', 'Broşürlük', 'Özel Dolap'],
      flooring: ['Laminat Parke', 'Halı'],
      lighting: ['LED Spot', 'Raylı Sistem', 'Dekoratif Armatür']
    }
  },
  en: {
    title: 'Prestige Wooden Stand',
    category: 'Wooden Stand',
    client: 'ABC Food',
    location: 'Istanbul',
    year: '2024',
    size: '36m²',
    challenge: 'The client wanted to create a natural and premium image at the exhibition. The goal was to create a warm atmosphere different from traditional stand designs.',
    solution: 'We created a custom design stand using natural solid oak wood. We developed a concept that highlights the natural texture of wood, blended with modern lines.',
    result: 'The stand became one of the most visited areas of the exhibition. Customer satisfaction was realized at 95%+ and 3 new business agreements were secured.',
    specs: {
      materials: ['Solid Oak', 'MDF Lacquer', 'Aluminum Profile'],
      equipment: ['55" TV Screen', 'Brochure Rack', 'Custom Cabinet'],
      flooring: ['Laminate Parquet', 'Carpet'],
      lighting: ['LED Spot', 'Track System', 'Decorative Fixture']
    }
  }
};

interface RelatedProject {
  id: string;
  titleTr: string;
  titleEn: string;
  categoryTr: string;
  categoryEn: string;
  slug: string;
}

const relatedProjects: RelatedProject[] = [
  { id: 'PROJE_002', titleTr: 'Modern Maxima Stand', titleEn: 'Modern Maxima Stand', categoryTr: 'Maxima Stand', categoryEn: 'Maxima Stand', slug: 'modern-maxima-stand' },
  { id: 'PROJE_004', titleTr: 'Lüks Ahşap Tasarım', titleEn: 'Luxury Wood Design', categoryTr: 'Ahşap Stand', categoryEn: 'Wooden Stand', slug: 'luks-ahsap-tasarim' },
  { id: 'PROJE_007', titleTr: 'Köşe Ahşap Stand', titleEn: 'Corner Wood Stand', categoryTr: 'Ahşap Stand', categoryEn: 'Wooden Stand', slug: 'kose-ahsap-stand' },
];

interface GalleryImage {
  id: string;
  span: string;
}

const galleryImages: GalleryImage[] = [
  { id: 'PROJE_DETAY_001', span: 'col-span-2 row-span-2' },
  { id: 'PROJE_DETAY_002', span: 'col-span-1 row-span-1' },
  { id: 'PROJE_DETAY_003', span: 'col-span-1 row-span-1' },
  { id: 'PROJE_DETAY_004', span: 'col-span-1 row-span-1' },
  { id: 'PROJE_DETAY_005', span: 'col-span-2 row-span-1' },
  { id: 'PROJE_DETAY_006', span: 'col-span-1 row-span-1' },
];

interface LabelTranslations {
  back: string;
  client: string;
  location: string;
  year: string;
  size: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  specs: string;
  materials: string;
  equipment: string;
  flooring: string;
  lighting: string;
  related: string;
  viewAll: string;
  clickToExpand: string;
}

interface ProjectDetailClientProps {
  locale: string;
  slug: string;
}

export default function ProjectDetailClient({ locale, slug }: ProjectDetailClientProps) {
  const t: ProjectTranslations = (locale === 'en' ? projectData.en : projectData.tr);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const translations: Record<string, LabelTranslations> = {
    tr: {
      back: 'Projelere Dön',
      client: 'Müşteri',
      location: 'Lokasyon',
      year: 'Yıl',
      size: 'Alan',
      category: 'Kategori',
      challenge: 'Zorluk',
      solution: 'Çözüm',
      result: 'Sonuç',
      specs: 'Teknik Özellikler',
      materials: 'Malzemeler',
      equipment: 'Ekipman',
      flooring: 'Zemin',
      lighting: 'Aydınlatma',
      related: 'Benzer Projeler',
      viewAll: 'Tüm Projeler',
      clickToExpand: 'Büyütmek için tıklayın'
    },
    en: {
      back: 'Back to Projects',
      client: 'Client',
      location: 'Location',
      year: 'Year',
      size: 'Area',
      category: 'Category',
      challenge: 'Challenge',
      solution: 'Solution',
      result: 'Result',
      specs: 'Technical Specs',
      materials: 'Materials',
      equipment: 'Equipment',
      flooring: 'Flooring',
      lighting: 'Lighting',
      related: 'Related Projects',
      viewAll: 'All Projects',
      clickToExpand: 'Click to expand'
    }
  };
  const labels: LabelTranslations = translations[locale] || translations.tr;

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Placeholder 
            id="PROJE_DETAY_HERO" 
            width={1920} 
            height={800} 
            className="w-full h-full"
            showLabel={false}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <Link 
              href={`/${locale}/projeler/`}
              className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {labels.back}
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-1.5 bg-[#009441] text-white text-sm font-medium rounded-full">
              {t.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl"
          >
            {t.title}
          </motion.h1>
        </div>

        {/* PROJECT INFO BAR - Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute bottom-8 left-4 right-4 sm:left-8 sm:right-8 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-full lg:max-w-4xl z-20"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#009441]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-[#009441]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{labels.client}</p>
                  <p className="font-semibold text-gray-900">{t.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#009441]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#009441]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{labels.location}</p>
                  <p className="font-semibold text-gray-900">{t.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#009441]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[#009441]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{labels.year}</p>
                  <p className="font-semibold text-gray-900">{t.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#009441]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Ruler className="w-5 h-5 text-[#009441]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{labels.size}</p>
                  <p className="font-semibold text-gray-900">{t.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#009441]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Tag className="w-5 h-5 text-[#009441]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{labels.category}</p>
                  <p className="font-semibold text-gray-900">{t.category}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECT DESCRIPTION - Challenge/Solution/Result */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-7 h-7 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{labels.challenge}</h2>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-gray-600 leading-relaxed">{t.challenge}</p>
              </div>
            </motion.div>

            <div className="border-t border-gray-100" />

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Wrench className="w-7 h-7 text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{labels.solution}</h2>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-gray-600 leading-relaxed">{t.solution}</p>
              </div>
            </motion.div>

            <div className="border-t border-gray-100" />

            {/* Result */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#009441]/10 rounded-xl flex items-center justify-center">
                    <Trophy className="w-7 h-7 text-[#009441]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{labels.result}</h2>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-gray-600 leading-relaxed">{t.result}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY - Masonry Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">{locale === 'tr' ? 'Proje Galerisi' : 'Project Gallery'}</h2>
            <p className="text-gray-500 mt-2">{labels.clickToExpand}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${image.span}`}
                onClick={() => setLightboxImage(image.id)}
              >
                <Placeholder 
                  id={image.id} 
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  showLabel={false}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <span className="text-2xl">+</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">{labels.specs}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Materials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#009441]/10 rounded-lg flex items-center justify-center">
                  <Hammer className="w-5 h-5 text-[#009441]" />
                </div>
                <h3 className="font-semibold text-gray-900">{labels.materials}</h3>
              </div>
              <ul className="space-y-2">
                {t.specs.materials.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#009441] rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#009441]/10 rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-[#009441]" />
                </div>
                <h3 className="font-semibold text-gray-900">{labels.equipment}</h3>
              </div>
              <ul className="space-y-2">
                {t.specs.equipment.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#009441] rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Flooring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#009441]/10 rounded-lg flex items-center justify-center">
                  <Ruler className="w-5 h-5 text-[#009441]" />
                </div>
                <h3 className="font-semibold text-gray-900">{labels.flooring}</h3>
              </div>
              <ul className="space-y-2">
                {t.specs.flooring.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#009441] rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Lighting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#009441]/10 rounded-lg flex items-center justify-center">
                  <Lamp className="w-5 h-5 text-[#009441]" />
                </div>
                <h3 className="font-semibold text-gray-900">{labels.lighting}</h3>
              </div>
              <ul className="space-y-2">
                {t.specs.lighting.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#009441] rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">{labels.related}</h2>
            <Link 
              href={`/${locale}/projeler/`}
              className="hidden sm:inline-flex items-center text-[#009441] font-medium hover:gap-2 transition-all group"
            >
              {labels.viewAll}
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/${locale}/projeler/${project.slug}/`} className="group block">
                  <div className="relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Placeholder 
                        id={project.id} 
                        className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                        showLabel={false}
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-[#009441] font-medium">{locale === 'tr' ? project.categoryTr : project.categoryEn}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-[#009441] transition-colors">
                        {locale === 'tr' ? project.titleTr : project.titleEn}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link 
              href={`/${locale}/projeler/`}
              className="inline-flex items-center text-[#009441] font-medium"
            >
              {labels.viewAll}
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Placeholder 
                id={lightboxImage} 
                className="w-full h-full rounded-lg"
                showLabel={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
