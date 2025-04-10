'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBookReader, FaUserMd, FaCalendarAlt } from 'react-icons/fa';
import { MdRecommend } from 'react-icons/md';
import Image from 'next/image';

// Define types for our service items
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

// Define the main component props
interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className = '' }) => {
  // Define our services
  const services: ServiceItem[] = [
    {
      id: 1,
      title: 'אוצרות ספרות בריאות',
      description: 'אוסף מקיף של ספרים בנושאי בריאות, תזונה, רפואה אלטרנטיבית ורווחה נפשית, מאורגן בקפידה לפי נושאים.',
      icon: <FaBookReader className="text-3xl text-[#4ECDC4]" />,
      imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'המלצות מומחים',
      description: 'צוות מומחים מקצועי שיעזור לך למצוא את הספרים המתאימים ביותר לצרכים הבריאותיים הספציפיים שלך.',
      icon: <MdRecommend className="text-3xl text-[#4ECDC4]" />,
      imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'הזמנות מיוחדות לאנשי מקצוע',
      description: 'שירות הזמנות מיוחד לרופאים, מטפלים ואנשי מקצוע בתחום הבריאות, כולל גישה לפרסומים מקצועיים.',
      icon: <FaUserMd className="text-3xl text-[#4ECDC4]" />,
      imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: 'אירועי ספרות בריאות',
      description: 'סדנאות, הרצאות ומפגשים עם מחברים בנושאי בריאות, המתקיימים בחנות שלנו באופן קבוע.',
      icon: <FaCalendarAlt className="text-3xl text-[#4ECDC4]" />,
      imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section 
      dir="rtl" 
      className={`py-16 px-4 md:px-8 bg-gradient-to-br from-[#FFEEAD]/30 to-white ${className}`}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            id="services-heading"
            className="text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            בחנות ספרים דלתא, אנו מציעים מגוון שירותים מותאמים אישית לצרכי הבריאות והלמידה שלך
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden"
              variants={itemVariants}
              whileHover="hover"
              style={{
                boxShadow: '8px 8px 16px rgba(174, 174, 192, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.7)'
              }}
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4ECDC4]/70 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 text-right">
                <div className="flex justify-end items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{service.title}</h3>
                  <div className="p-3 rounded-full bg-[#FFEEAD] flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                </div>
                <p className="text-gray-600">{service.description}</p>
                
                <motion.button
                  className="mt-6 px-6 py-2 w-full text-center rounded-lg bg-[#4ECDC4] text-white font-medium transition-all"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 10px 15px -3px rgba(78, 205, 196, 0.3), 0 4px 6px -2px rgba(78, 205, 196, 0.2)'
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    boxShadow: '3px 3px 6px rgba(174, 174, 192, 0.2), -3px -3px 6px rgba(255, 255, 255, 0.7)'
                  }}
                >
                  קרא עוד
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;