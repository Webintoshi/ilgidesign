import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/lib/routing';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
