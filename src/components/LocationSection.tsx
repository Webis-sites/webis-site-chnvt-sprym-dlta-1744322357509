'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

// Types
interface OperatingHour {
  day: string;
  hours: string;
}

interface LocationProps {
  businessName: string;
  address: string;
  phone: string;
  email: string;
  operatingHours: OperatingHour[];
  description: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const LocationSection: React.FC = () => {
  // Sample data
  const locationData: LocationProps = {
    businessName: 'חנות ספרים דלתא',
    address: 'רחוב הרצל 123, תל אביב, ישראל',
    phone: '03-1234567',
    email: 'info@deltabookstore.co.il',
    operatingHours: [
      { day: 'ראשון - חמישי', hours: '09:00 - 20:00' },
      { day: 'שישי', hours: '09:00 - 14:00' },
      { day: 'שבת', hours: 'סגור' },
    ],
    description: 'אנחנו חנות ספרים מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
  };

  return (
    <section 
      dir="rtl" 
      className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="location-heading" 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            מיקום ושעות פעילות
          </h2>
          <div className="w-24 h-1 bg-[#4ECDC4] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Map and Image Section */}
          <motion.div 
            variants={itemVariants}
            className="h-[400px] md:h-[500px] relative overflow-hidden rounded-2xl shadow-lg"
          >
            <div className="absolute inset-0 bg-[#FFEEAD]/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-[#4ECDC4]/30 max-w-xs">
                  <FaMapMarkerAlt className="text-[#4ECDC4] text-3xl mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">בקרו אותנו</h3>
                  <p className="text-gray-600">{locationData.address}</p>
                </div>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="חנות ספרים דלתא - תמונת רקע"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-white/50"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-right">
                {locationData.businessName}
              </h3>
              <p className="text-gray-600 mb-6 text-right leading-relaxed">
                {locationData.description}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center justify-end mb-4">
                <div className="text-right mr-4">
                  <h4 className="font-semibold text-gray-800">כתובת</h4>
                  <p className="text-gray-600">{locationData.address}</p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FFEEAD] shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)]">
                  <FaMapMarkerAlt className="text-[#4ECDC4] text-xl" />
                </div>
              </div>

              <div className="flex items-center justify-end mb-4">
                <div className="text-right mr-4">
                  <h4 className="font-semibold text-gray-800">טלפון</h4>
                  <a 
                    href={`tel:${locationData.phone}`} 
                    className="text-gray-600 hover:text-[#4ECDC4] transition-colors"
                    aria-label="התקשר אלינו"
                  >
                    {locationData.phone}
                  </a>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FFEEAD] shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)]">
                  <FaPhone className="text-[#4ECDC4] text-xl" />
                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="text-right mr-4">
                  <h4 className="font-semibold text-gray-800">דוא"ל</h4>
                  <a 
                    href={`mailto:${locationData.email}`} 
                    className="text-gray-600 hover:text-[#4ECDC4] transition-colors"
                    aria-label="שלח לנו אימייל"
                  >
                    {locationData.email}
                  </a>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FFEEAD] shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)]">
                  <FaEnvelope className="text-[#4ECDC4] text-xl" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-end mb-4">
                <h4 className="font-semibold text-gray-800 mr-4">שעות פעילות</h4>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FFEEAD] shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)]">
                  <FaClock className="text-[#4ECDC4] text-xl" />
                </div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-[#4ECDC4]/20">
                {locationData.operatingHours.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-600">{item.hours}</span>
                    <span className="font-medium text-gray-800">{item.day}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <motion.button
                className="w-full py-3 px-6 bg-[#4ECDC4] text-white rounded-xl font-medium shadow-[3px_3px_6px_rgba(0,0,0,0.1)] hover:shadow-[1px_1px_3px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[#3dbcb3] active:scale-[0.98]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                קבל הוראות הגעה
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;