import { Metadata } from 'next';
import ProjectDetailClient from './ProjectDetailClient';

// Generate static params for all project slugs
export function generateStaticParams() {
  const locales = ['tr', 'en'];
  const slugs = [
    'prestij-ahsap-stand',
    'modern-maxima-stand',
    'hannover-fuari-standi',
    'luks-ahsap-tasarim',
    'moduler-fuar-standi',
    'frankfurt-fuar-projesi',
    'kose-ahsap-stand',
    'cift-katli-maxima'
  ];
  
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  
  return params;
}

// Generate metadata for each project
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}): Promise<Metadata> {
  const { locale, slug } = await params;
  
  const titles: Record<string, Record<string, string>> = {
    'prestij-ahsap-stand': { tr: 'Prestij Ahşap Stand', en: 'Prestige Wooden Stand' },
    'modern-maxima-stand': { tr: 'Modern Maxima Stand', en: 'Modern Maxima Stand' },
    'hannover-fuari-standi': { tr: 'Hannover Fuarı Standı', en: 'Hannover Exhibition Stand' },
    'luks-ahsap-tasarim': { tr: 'Lüks Ahşap Tasarım', en: 'Luxury Wood Design' },
    'moduler-fuar-standi': { tr: 'Modüler Fuar Standı', en: 'Modular Exhibition Stand' },
    'frankfurt-fuar-projesi': { tr: 'Frankfurt Fuar Projesi', en: 'Frankfurt Exhibition Project' },
    'kose-ahsap-stand': { tr: 'Köşe Ahşap Stand', en: 'Corner Wood Stand' },
    'cift-katli-maxima': { tr: 'Çift Katlı Maxima', en: 'Double Floor Maxima' },
  };
  
  const title = titles[slug]?.[locale] || 'Proje Detayı';
  
  return {
    title: `${title} | İlgi Design`,
    description: locale === 'tr' 
      ? 'Fuar standı projesi detayları ve görselleri'
      : 'Exhibition stand project details and gallery',
  };
}

// Server Component
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  
  return <ProjectDetailClient locale={locale} slug={slug} />;
}
