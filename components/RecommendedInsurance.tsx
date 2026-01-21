import React from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay between Title and Cards
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // Relaxed speed
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger between the two cards
      delayChildren: 0,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const RecommendedInsurance: React.FC = () => {
  return (
    <motion.section
      className="max-w-[1280px] mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4, margin: "0px 0px -30% 0px" }} // Adjusted separation
      variants={sectionVariants}
    >
      <motion.div className="mb-8 px-2" variants={headerVariants}>
        <h2 className="text-3xl font-bold text-[#111111] tracking-tight mb-3">고객님께 꼭 필요한 보험</h2>
        <p className="text-gray-500 font-medium">라이프스타일에 맞춘 최적의 상품을 제안합니다</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={gridVariants}
      >
        {/* Card 1: Future (Vibrant Green) */}
        <motion.div className="h-full" variants={itemVariants}>
          <div className="bg-[#16AA6A] rounded-[24px] pl-10 py-10 pr-[56px] relative overflow-hidden group transition-all hover:shadow-lg h-full">

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight break-keep">
                  부담 없는 보험료로<br />미래 준비하기
                </h3>

                <p className="text-white/80 font-medium leading-relaxed text-[15px] break-keep">
                  2030 세대를 위한 필수 보장만<br />모아 합리적으로 설계했어요
                </p>
              </div>

              <button className="w-fit h-9 px-4 bg-white text-[#16AA6A] rounded-full font-bold text-[14px] shadow-sm mt-4 flex items-center justify-center gap-1 transition-all hover:bg-green-50">
                지금 확인하기 <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Icon - Center Right */}
            <div className="absolute right-[56px] top-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
              <img src="/assets/Banner02.webp" alt="Future Icon" className="w-full h-full object-contain drop-shadow-sm opacity-100" />
            </div>
          </div>
        </motion.div>

        {/* Card 2: Health (Vibrant Blue) */}
        <motion.div className="h-full" variants={itemVariants}>
          <div className="bg-[#2FA4E8] rounded-[24px] pl-10 py-10 pr-[56px] relative overflow-hidden group transition-all hover:shadow-lg h-full">

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight break-keep">
                  온 가족 건강지킴이<br />종합 건강보험
                </h3>
                <p className="text-white/80 font-medium leading-relaxed text-[15px] break-keep">
                  병원비 걱정 없이<br />우리 가족의 건강을 지켜드려요
                </p>
              </div>

              <button className="w-fit h-9 px-4 bg-white text-[#2FA4E8] rounded-full font-bold text-[14px] shadow-sm mt-4 flex items-center justify-center gap-1 transition-all hover:bg-blue-50">
                지금 확인하기 <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Icon - Center Right */}
            <div className="absolute right-[56px] top-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
              <img src="/assets/Banner01.webp" alt="Health Icon" className="w-full h-full object-contain drop-shadow-sm opacity-100" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default RecommendedInsurance;