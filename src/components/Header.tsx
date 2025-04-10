'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX, FiPhone, FiMail, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  id: number;
  title: string;
  href: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { id: 1, title: 'דף הבית', href: '/' },
    { id: 2, title: 'חנות', href: '/shop' },
    { id: 3, title: 'קטגוריות', href: '/categories' },
    { id: 4, title: 'מבצעים', href: '/promotions' },
    { id: 5, title: 'אודות', href: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-inner mr-3">
              <Image
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="לוגו חנות ספרים דלתא"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-800">חנות ספרים דלתא</h1>
              <p className="text-xs text-gray-600">ספרים לבריאות הנפש והגוף</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="relative px-4 py-2 mx-1 text-gray-700 hover:text-[#4ECDC4] transition-colors duration-300 rounded-lg text-right"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.title}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-[#FFEEAD]/20 rounded-lg shadow-inner"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3 space-x-reverse">
            <button 
              aria-label="חיפוש"
              className="p-2 rounded-full bg-[#FFEEAD]/30 hover:bg-[#FFEEAD]/50 text-gray-700 transition-all duration-300 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)]"
            >
              <FiSearch className="h-5 w-5" />
            </button>
            
            <button 
              aria-label="עגלת קניות"
              className="p-2 rounded-full bg-[#FFEEAD]/30 hover:bg-[#FFEEAD]/50 text-gray-700 transition-all duration-300 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)]"
            >
              <FiShoppingCart className="h-5 w-5" />
            </button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-[#4ECDC4] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-opacity-90 border border-white/20"
            >
              <FiPhone className="ml-2 h-4 w-4" />
              <span>צור קשר</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-[#FFEEAD]/30 hover:bg-[#FFEEAD]/50 text-gray-700 transition-all duration-300 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)]"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/90 backdrop-blur-md border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="px-4 py-3 text-gray-700 hover:text-[#4ECDC4] hover:bg-[#FFEEAD]/20 rounded-lg text-right transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                  <button 
                    aria-label="חיפוש"
                    className="p-2 rounded-full bg-[#FFEEAD]/30 hover:bg-[#FFEEAD]/50 text-gray-700 transition-all duration-300 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)]"
                  >
                    <FiSearch className="h-5 w-5" />
                  </button>
                  
                  <button 
                    aria-label="עגלת קניות"
                    className="p-2 rounded-full bg-[#FFEEAD]/30 hover:bg-[#FFEEAD]/50 text-gray-700 transition-all duration-300 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)]"
                  >
                    <FiShoppingCart className="h-5 w-5" />
                  </button>
                  
                  <button className="flex items-center px-4 py-2 bg-[#4ECDC4] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-opacity-90 border border-white/20">
                    <FiPhone className="ml-2 h-4 w-4" />
                    <span>צור קשר</span>
                  </button>
                </div>
                <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-200">
                  <a href="tel:+972123456789" className="flex items-center text-gray-700 hover:text-[#4ECDC4] text-right">
                    <FiPhone className="ml-2 h-4 w-4" />
                    <span>072-123-4567</span>
                  </a>
                  <a href="mailto:info@deltabooks.co.il" className="flex items-center text-gray-700 hover:text-[#4ECDC4] text-right">
                    <FiMail className="ml-2 h-4 w-4" />
                    <span>info@deltabooks.co.il</span>
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;