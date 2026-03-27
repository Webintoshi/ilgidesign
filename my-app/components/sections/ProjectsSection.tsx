'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Placeholder from '@/components/Placeholder';
import { useParams } from 'next/navigation';

const projects = [
  { id: 'PROJE_001', category: 'Ahşap Stand', title: 'Prestij Ahşap Stand', client: 'ABC Gıda' },
  { id: 'PROJE_002', category: 'Maxima Stand', title: 'Modern Maxima Stand', client: 'XYZ Teknoloji' },
  { id: 'PROJE_003', category: 'Almanya', title: 'Hannover Fuar Projesi', client: '123 Makina' },
  { id: 'PROJE_004', category: 'Ahşap Stand', title: 'Lüks Ahşap Tasarım', client: 'Premium Mobilya' },
  { id: 'PROJE_005', category: 'Maxima Stand', title: 'Modüler Stand Sistemi', client: 'Delta Ürünleri' },
  { id: 'PROJE_006', category: 'Almanya', title: 'Avrupa Standartları', client: 'Epsilon Ltd.' },
];

export default function ProjectsSection() {
  const params = useParams();
  const locale = (params?.locale as string) || 'tr';

  const translations = {
    tr: { title: 'Öne Çıkan Projelerimiz', subtitle: 'Tamamladığımız bazı prestijli projeler', viewAll: 'Tüm Projeler' },
    en: { title: 'Featured Projects', subtitle: 'Some of our prestigious completed projects', viewAll: 'All Projects' }
  };
  const t = translations[locale as keyof typeof translations];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.title}</h2>
            <p className="text-gray-600 text-lg">{t.subtitle}</p>
          </div>
          <Link href={`/${locale}/projeler/`} className="inline-flex items-center text-[#009441] font-semibold hover:gap-2 transition-all">
            {t.viewAll}
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <Placeholder id={project.id} className="w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#009441] text-sm font-medium mb-1">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.client}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-[#009441]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
