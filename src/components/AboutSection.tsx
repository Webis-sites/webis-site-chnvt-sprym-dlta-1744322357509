'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBookOpen, FaUserMd, FaAward, FaHandshake } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-end p-6 rounded-xl bg-white/80 backdrop-blur-md border border-white/20 shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="bg-secondary-light p-3 rounded-full mb-4 text-secondary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const AboutSection: FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section dir="rtl" className="py-16 px-4 md:px-8 lg:px-16 bg-primary-light relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-right mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            אודות <span className="text-secondary">חנות ספרים דלתא</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mr-0 ml-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mr-0 ml-auto text-lg">
            אנחנו חנות ספרים מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-neumorphic"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="חנות ספרים דלתא - ספרים בנושא בריאות"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold">ספריית בריאות מקיפה</h3>
              <p className="text-white/90">מגוון רחב של ספרים בנושאי בריאות, תזונה ורפואה</p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center text-right">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              המומחיות שלנו בתחום ספרות הבריאות
            </motion.h3>
            
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-center justify-end gap-4"
                variants={fadeIn}
              >
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">ניסיון של שנים</h4>
                  <p className="text-gray-600">למעלה מ-15 שנות ניסיון בתחום ספרות הבריאות</p>
                </div>
                <div className="bg-secondary-light p-3 rounded-full text-secondary">
                  <FaAward size={24} />
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-end gap-4"
                variants={fadeIn}
              >
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">צוות מקצועי</h4>
                  <p className="text-gray-600">צוות מומחים עם ידע נרחב בתחומי הבריאות והתזונה</p>
                </div>
                <div className="bg-secondary-light p-3 rounded-full text-secondary">
                  <FaUserMd size={24} />
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-end gap-4"
                variants={fadeIn}
              >
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">שירות אישי</h4>
                  <p className="text-gray-600">ייעוץ מותאם אישית לצרכי הלקוח ומטרותיו</p>
                </div>
                <div className="bg-secondary-light p-3 rounded-full text-secondary">
                  <FaHandshake size={24} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <FeatureCard 
            icon={<FaBookOpen size={24} />}
            title="מגוון ספרים"
            description="אוסף עשיר של ספרים בנושאי בריאות, תזונה, רפואה משלימה ואורח חיים בריא"
          />
          <FeatureCard 
            icon={<FaUserMd size={24} />}
            title="מומחיות מקצועית"
            description="צוות מומחים עם ידע נרחב בתחומי הבריאות והתזונה לייעוץ מקצועי"
          />
          <FeatureCard 
            icon={<FaAward size={24} />}
            title="איכות מובטחת"
            description="בחירה קפדנית של ספרים איכותיים מהמחברים והמומחים המובילים בתחום"
          />
          <FeatureCard 
            icon={<FaHandshake size={24} />}
            title="שירות אישי"
            description="ליווי אישי והתאמת ספרות מקצועית לצרכים הספציפיים של כל לקוח"
          />
        </motion.div>

        <motion.div 
          className="mt-20 p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-white/20 shadow-neumorphic text-right relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-secondary/10 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/20 blur-2xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">הצטרפו אלינו במסע לחיים בריאים יותר</h3>
            <p className="text-gray-600 mb-6">
              בחנות ספרים דלתא, אנו מאמינים שידע הוא המפתח לחיים בריאים ומאושרים יותר. הצוות המקצועי שלנו כאן כדי לעזור לכם למצוא את הספרים המתאימים ביותר לצרכים שלכם.
            </p>
            <motion.button 
              className="bg-secondary text-white px-6 py-3 rounded-lg shadow-neumorphic-button hover:shadow-neumorphic-button-hover transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              צרו קשר עוד היום
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;