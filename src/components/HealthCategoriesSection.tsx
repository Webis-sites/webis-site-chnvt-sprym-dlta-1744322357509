'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBookMedical, FaBrain, FaRunning, FaBookOpen, FaLeaf, FaHeartbeat } from 'react-icons/fa';

// Define types for category data
interface HealthCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const HealthBookCategories: React.FC = () => {
  // Categories data
  const categories: HealthCategory[] = [
    {
      id: 'nutrition',
      title: 'תזונה',
      description: 'ספרים על תזונה בריאה, דיאטות ומתכונים',
      icon: <FaLeaf className="text-2xl" />,
      imageUrl: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'mental-health',
      title: 'בריאות נפשית',
      description: 'ספרים על מדיטציה, מיינדפולנס וטיפול עצמי',
      icon: <FaBrain className="text-2xl" />,
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'fitness',
      title: 'כושר',
      description: 'ספרים על אימונים, יוגה ופעילות גופנית',
      icon: <FaRunning className="text-2xl" />,
      imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'medical',
      title: 'ספרי רפואה',
      description: 'ספרי עיון ומחקר בתחום הרפואה',
      icon: <FaBookMedical className="text-2xl" />,
      imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'alternative',
      title: 'רפואה אלטרנטיבית',
      description: 'ספרים על צמחי מרפא, הומאופתיה ורפואה משלימה',
      icon: <FaLeaf className="text-2xl" />,
      imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'preventive',
      title: 'רפואה מונעת',
      description: 'ספרים על אורח חיים בריא ומניעת מחלות',
      icon: <FaHeartbeat className="text-2xl" />,
      imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    }
  };

  return (
    <section dir="rtl" className="py-12 px-4 md:px-8 bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-right mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            קטגוריות ספרי בריאות
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mr-auto ml-0">
            גלו את מגוון ספרי הבריאות שלנו בחנות ספרים דלתא, המציעה מבחר עשיר של ספרים בנושאי בריאות, תזונה וסגנון חיים בריא.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-2xl bg-white"
              style={{
                boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.05), -8px -8px 16px rgba(255, 255, 255, 0.8)',
              }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div 
                className="p-6 relative z-10 backdrop-blur-sm bg-white/80 border border-white/20"
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFEEAD] text-[#4ECDC4]">
                    {category.icon}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-right">{category.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-4 rounded-xl text-white font-medium text-center transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #4ECDC4, #2AB7CA)',
                    boxShadow: '0 4px 10px rgba(78, 205, 196, 0.3)',
                  }}
                >
                  לצפייה בספרים
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center py-3 px-8 rounded-full text-[#4ECDC4] font-medium text-lg transition-all"
            style={{
              background: '#FFEEAD',
              boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)',
            }}
          >
            לכל הקטגוריות
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HealthBookCategories;