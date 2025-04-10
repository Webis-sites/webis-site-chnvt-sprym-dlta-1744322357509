'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBookReader, FaBookMedical, FaRegLightbulb, FaUserMd } from 'react-icons/fa';
import Image from 'next/image';

interface StatItem {
  id: number;
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface ExpertiseCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ExpertiseSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: 1,
      icon: <FaBookReader size={24} />,
      value: '+5,000',
      label: 'ספרי בריאות',
    },
    {
      id: 2,
      icon: <FaUserMd size={24} />,
      value: '+15',
      label: 'שנות ניסיון',
    },
    {
      id: 3,
      icon: <FaBookMedical size={24} />,
      value: '+200',
      label: 'ספרים חדשים בשנה',
    },
    {
      id: 4,
      icon: <FaRegLightbulb size={24} />,
      value: '+50',
      label: 'סדנאות בריאות',
    },
  ];

  const expertiseCards: ExpertiseCardProps[] = [
    {
      title: 'ידע מקצועי',
      description: 'הצוות שלנו מתמחה בספרות בריאות עדכנית ויכול לסייע במציאת הספרים המתאימים לצרכים שלך',
      imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'עדכונים שוטפים',
      description: 'אנו מתעדכנים באופן קבוע בפרסומים החדשים ביותר בתחום הבריאות והרפואה',
      imageUrl: 'https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'המלצות אישיות',
      description: 'נספק לך המלצות אישיות המותאמות לצרכים הספציפיים שלך בתחום הבריאות',
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section dir="rtl" className="w-full py-16 bg-gradient-to-br from-[#FFEEAD]/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-right mb-4 text-gray-800">
            המומחיות שלנו
          </h2>
          <p className="text-xl text-right text-gray-600 max-w-3xl mx-auto">
            בחנות ספרים דלתא, אנו מתמחים בספרות בריאות מקצועית ומעודכנת, עם צוות מומחים שישמח לסייע לך למצוא את הספרים המתאימים ביותר לצרכיך.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 text-center shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all duration-300"
            >
              <div className="flex justify-center items-center mb-4 text-[#4ECDC4]">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {expertiseCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-right">
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white/90 text-sm">{card.description}</p>
              </div>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#4ECDC4]/20 backdrop-blur-[2px] transition-all duration-300 border border-white/20 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-white/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-right">
              מחפשים ספר בריאות מסוים?
            </h3>
            <p className="text-gray-600 mb-6 text-right">
              הצוות המקצועי שלנו ישמח לעזור לך למצוא את הספר המושלם עבורך. אנו מתמחים בהתאמה אישית של ספרות בריאות לצרכים הייחודיים של כל לקוח.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#4ECDC4] text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              צור קשר עם המומחים שלנו
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;