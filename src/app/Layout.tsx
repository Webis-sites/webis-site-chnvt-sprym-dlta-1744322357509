import { ReactNode } from 'react';
import { Inter, Heebo } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const heebo = Heebo({
  subsets: ['hebrew'],
  display: 'swap',
  variable: '--font-heebo',
});

// Metadata configuration
export const metadata: Metadata = {
  title: 'חנות ספרים דלתא - ספרים בנושא בריאות',
  description: 'אנחנו חנות ספרים מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
  keywords: 'חנות ספרים, ספרים, בריאות, מזון, קריאה, ספרות',
  authors: [{ name: 'חנות ספרים דלתא' }],
  openGraph: {
    title: 'חנות ספרים דלתא - ספרים בנושא בריאות',
    description: 'אנחנו חנות ספרים מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'חנות ספרים דלתא',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
};

// Layout props interface
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${heebo.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-primary/30 to-white text-gray-800">
        <div className="relative min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-50 w-full">
            <div className="backdrop-blur-md bg-white/70 border-b border-gray-200/50 shadow-sm">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl shadow-neumorphic">
                    ד
                  </div>
                  <h1 className="text-xl font-bold text-right">חנות ספרים דלתא</h1>
                </div>
                <nav>
                  <ul className="flex gap-6 text-right">
                    <li>
                      <a 
                        href="#" 
                        className="relative px-2 py-1 text-gray-700 hover:text-secondary transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                      >
                        ראשי
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="relative px-2 py-1 text-gray-700 hover:text-secondary transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                      >
                        אודות
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="relative px-2 py-1 text-gray-700 hover:text-secondary transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
                      >
                        צור קשר
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm">
                © {new Date().getFullYear()} חנות ספרים דלתא. כל הזכויות שמורות.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}