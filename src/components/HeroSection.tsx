'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaBook, FaLeaf } from 'react-icons/fa';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(78, 205, 196, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      }
    },
    tap: { 
      scale: 0.95,
      boxShadow: '0 5px 10px rgba(78, 205, 196, 0.1)',
    }
  };

  return (
    <section 
      dir="rtl" 
      className={`relative w-full overflow-hidden ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="רקע של ספרים"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#FFEEAD]/90 to-[#4ECDC4]/40 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <motion.div
          className="flex flex-col items-end max-w-4xl mr-auto ml-0"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Logo and Tagline */}
          <motion.div 
            className="flex items-center justify-end mb-6"
            variants={itemVariants}
          >
            <span className="text-lg font-medium text-gray-800 ms-3">בריאות דרך ידע</span>
            <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-neumorphic">
              <FaLeaf className="text-[#4ECDC4] h-6 w-6" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-right text-gray-900 mb-4"
            variants={itemVariants}
          >
            <span className="block">חנות ספרים מוביל</span>
            <span className="block text-[#4ECDC4]">בישראל</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-xl text-right text-gray-700 mb-8 max-w-2xl"
            variants={itemVariants}
          >
            חווית לקוח מושלמת בכל ביקור. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו עם מגוון רחב של ספרי בריאות.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <motion.button
              className="group flex items-center bg-[#4ECDC4] text-white py-3 px-8 rounded-xl text-lg font-medium shadow-neumorphic-button backdrop-blur-sm border border-white/20"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              aria-label="קבע תור עכשיו"
            >
              <span>קבע תור עכשיו</span>
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            variants={itemVariants}
          >
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-neumorphic border border-white/40">
              <div className="flex items-center justify-end mb-3">
                <h3 className="text-xl font-semibold text-gray-800 ms-3">מבחר ספרים איכותיים</h3>
                <div className="bg-[#FFEEAD]/70 p-2 rounded-full shadow-inner">
                  <FaBook className="text-gray-700 h-5 w-5" />
                </div>
              </div>
              <p className="text-right text-gray-700">
                אוסף מקיף של ספרי בריאות, תזונה ורפואה מהמחברים המובילים בתחום.
              </p>
            </div>
            
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-neumorphic border border-white/40">
              <div className="flex items-center justify-end mb-3">
                <h3 className="text-xl font-semibold text-gray-800 ms-3">ייעוץ מקצועי</h3>
                <div className="bg-[#FFEEAD]/70 p-2 rounded-full shadow-inner">
                  <FaLeaf className="text-gray-700 h-5 w-5" />
                </div>
              </div>
              <p className="text-right text-gray-700">
                צוות מומחים שישמח לעזור לך למצוא את הספרים המתאימים לצרכים שלך.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <motion.div 
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#FFEEAD]/30 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
    </section>
  );
};

export default Hero;