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
                        ספרים
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
          <main className="container mx-auto px-4 py-8">
            {/* Glass Card Container */}
            <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 shadow-glass border border-white/50 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 text-right">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">ברוכים הבאים לחנות הספרים שלנו</h2>
                  <p className="mb-6 text-gray-700">
                    אנחנו חנות ספרים מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
                  </p>
                  <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-neumorphic-button hover:shadow-neumorphic-button-hover active:shadow-neumorphic-button-active transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0">
                    גלה עוד
                  </button>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg relative h-64 w-full">
                    <img 
                      src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="ספרים בחנות" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="neumorphic-container p-8 rounded-2xl">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-auto py-8 bg-gray-100/80 backdrop-blur-sm border-t border-gray-200/50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-right">
                  <h3 className="font-bold text-lg mb-2">חנות ספרים דלתא</h3>
                  <p className="text-gray-600 text-sm">
                    אנחנו חנות ספרים מוביל בתחום המזון עם ניסיון של שנים רבות
                  </p>
                </div>
                <div className="text-right">
                  <h4 className="font-bold mb-2">צור קשר</h4>
                  <p className="text-gray-600 text-sm">טלפון: 03-1234567</p>
                  <p className="text-gray-600 text-sm">דוא"ל: info@deltabooks.co.il</p>
                </div>
                <div className="text-right">
                  <h4 className="font-bold mb-2">שעות פעילות</h4>
                  <p className="text-gray-600 text-sm">ראשון-חמישי: 9:00-20:00</p>
                  <p className="text-gray-600 text-sm">שישי: 9:00-14:00</p>
                </div>
              </div>
              <div className="mt-8 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} חנות ספרים דלתא. כל הזכויות שמורות.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

// Add this to your globals.css file
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #FFEEAD;
  --secondary: #4ECDC4;
}

@layer base {
  html {
    font-family: var(--font-heebo), system-ui, sans-serif;
  }
}

@layer components {
  .shadow-neumorphic {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1),
                -5px -5px 10px rgba(255, 255, 255, 0.8);
  }
  
  .shadow-neumorphic-button {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1),
                -4px -4px 8px rgba(255, 255, 255, 0.5),
                inset 0px 0px 0px rgba(0, 0, 0, 0),
                inset 0px 0px 0px rgba(255, 255, 255, 0);
  }
  
  .shadow-neumorphic-button-hover {
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1),
                -6px -6px 12px rgba(255, 255, 255, 0.5),
                inset 0px 0px 0px rgba(0, 0, 0, 0),
                inset 0px 0px 0px rgba(255, 255, 255, 0);
  }
  
  .shadow-neumorphic-button-active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0),
                0px 0px 0px rgba(255, 255, 255, 0),
                inset 4px 4px 8px rgba(0, 0, 0, 0.1),
                inset -4px -4px 8px rgba(255, 255, 255, 0.5);
  }
  
  .shadow-glass {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
  
  .neumorphic-container {
    background-color: #f0f0f0;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1),
                -8px -8px 16px rgba(255, 255, 255, 0.8);
  }
}
*/

// Add this to your tailwind.config.js
/*
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      fontFamily: {
        sans: ['var(--font-heebo)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
*/