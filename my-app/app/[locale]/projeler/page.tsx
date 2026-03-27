import Link from 'next/link';
import Placeholder from '@/components/Placeholder';
import { ArrowUpRight, MapPin, Calendar, Ruler } from 'lucide-react';

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

const projects = [
  { id: 'PROJE_001', slug: 'prestij-ahsap-stand', categoryTr: 'Ahşap Stand', categoryEn: 'Wooden Stand', title: 'Prestij Ahşap Stand', client: 'ABC Gıda', location: 'İstanbul', year: '2024', size: '36m²' },
  { id: 'PROJE_002', slug: 'modern-maxima-stand', categoryTr: 'Maxima Stand', categoryEn: 'Maxima Stand', title: 'Modern Maxima Stand', client: 'XYZ Teknoloji', location: 'Ankara', year: '2024', size: '24m²' },
  { id: 'PROJE_003', slug: 'hannover-fuari-standi', categoryTr: 'Almanya', categoryEn: 'Germany', title: 'Hannover Fuarı Standı', client: '123 Makina', location: 'Germany', year: '2024', size: '48m²' },
  { id: 'PROJE_004', slug: 'luks-ahsap-tasarim', categoryTr: 'Ahşap Stand', categoryEn: 'Wooden Stand', title: 'Lüks Ahşap Tasarım', client: 'Premium Mobilya', location: 'İzmir', year: '2023', size: '42m²' },
  { id: 'PROJE_005', slug: 'moduler-fuar-standi', categoryTr: 'Maxima Stand', categoryEn: 'Maxima Stand', title: 'Modüler Fuar Standı', client: 'Delta Ürünleri', location: 'Bursa', year: '2023', size: '30m²' },
  { id: 'PROJE_006', slug: 'frankfurt-fuar-projesi', categoryTr: 'Almanya', categoryEn: 'Germany', title: 'Frankfurt Fuar Projesi', client: 'Epsilon Ltd.', location: 'Germany', year: '2023', size: '60m²' },
  { id: 'PROJE_007', slug: 'kose-ahsap-stand', categoryTr: 'Ahşap Stand', categoryEn: 'Wooden Stand', title: 'Köşe Ahşap Stand', client: 'Zeta Gıda', location: 'Antalya', year: '2023', size: '18m²' },
  { id: 'PROJE_008', slug: 'cift-katli-maxima', categoryTr: 'Maxima Stand', categoryEn: 'Maxima Stand', title: 'Çift Katlı Maxima', client: 'Omega Grup', location: 'İstanbul', year: '2024', size: '72m²' },
];

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const translations = {
    tr: { title: 'Projelerimiz', subtitle: 'Tamamladığımız fuar standı projelerinden bazıları.' },
    en: { title: 'Our Projects', subtitle: 'Some of our completed exhibition stand projects.' }
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/${locale}/projeler/${project.slug}/`}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Placeholder id={project.id} className="w-full h-full" showLabel={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[#009441] text-sm font-medium mb-1">{locale === 'tr' ? project.categoryTr : project.categoryEn}</span>
                    <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.client}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-[#009441]" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-[#009441] transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{project.client}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />{project.location}</span>
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" />{project.year}</span>
                    <span className="flex items-center"><Ruler className="w-3 h-3 mr-1" />{project.size}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
