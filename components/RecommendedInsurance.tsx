
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const RecommendedInsurance: React.FC = () => {
  return (
    <motion.section
      className="max-w-[1600px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="flex flex-col lg:flex-row gap-20 items-start">

        {/* Left: Title & Navigation Area */}
        <div className="lg:w-[350px] shrink-0 pt-2">
          <h2 className="text-[44px] font-bold text-[#111111] leading-[1.25] mb-12 tracking-tight whitespace-nowrap">
            고객님께<br />
            꼭 필요한 상품<br />
            추천해 드려요
          </h2>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-bold py-2">
              <span className="text-gray-900">01</span>
              <span className="text-gray-200">/</span>
              <span className="text-gray-400">08</span>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-[#333] hover:bg-black transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-black transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Cards Container */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

          {/* Card 1: Future (Green) */}
          <motion.div className="h-full" variants={itemVariants}>
            <div className="bg-[#16AA6A] rounded-[40px] p-10 relative overflow-hidden group hover:shadow-2xl transition-all h-[440px] flex flex-col items-start">
              <div className="relative z-10 text-left">
                <h3 className="text-[24px] font-bold text-white mb-4 leading-tight">
                  부담없는 보험료로<br />미래 준비하기
                </h3>
                <p className="text-white/80 text-[16px] font-medium leading-relaxed">
                  2030세대를 위한 필수 보장안을<br />모아 합리적으로 설계했어요
                </p>
              </div>

              {/* Mid Arrow Button - Left Aligned */}
              <div className="mt-8 w-11 h-11 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 cursor-pointer transition-colors z-10">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>

              {/* Bottom Right Icon: 180*180px, 32px margin from right/bottom */}
              <div className="absolute right-8 bottom-8 w-[180px] h-[180px] transition-transform duration-500 group-hover:scale-105 pointer-events-none">
                <img src="/assets/Banner02.webp" alt="Future" className="w-full h-full object-contain" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Claims (Dark Gray) */}
          <motion.div className="h-full" variants={itemVariants}>
            <div className="bg-[#444444] rounded-[40px] p-10 relative overflow-hidden group hover:shadow-2xl transition-all h-[440px] flex flex-col items-start">
              <div className="relative z-10 text-left">
                <h3 className="text-[24px] font-bold text-white mb-4 leading-tight">
                  사고 걱정 없는 안전운전<br />지원 운전자보험
                </h3>
                <p className="text-white/80 text-[16px] font-medium leading-relaxed">
                  핵심 보장만 쏙쏙 골라 담아<br />더욱 든든하게 준비할 수 있어요
                </p>
              </div>

              <div className="mt-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors z-10">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>

              <div className="absolute right-8 bottom-8 w-[180px] h-[180px] transition-transform duration-500 group-hover:scale-105 pointer-events-none">
                <img src="/assets/Banner03.webp" alt="Claim" className="w-full h-full object-contain" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Health (Blue) */}
          <motion.div className="h-full" variants={itemVariants}>
            <div className="bg-[#018BEE] rounded-[40px] p-10 relative overflow-hidden group hover:shadow-2xl transition-all h-[440px] flex flex-col items-start">
              <div className="relative z-10 text-left">
                <h3 className="text-[24px] font-bold text-white mb-4 leading-tight">
                  온 가족 건강지킴이<br />종합 건강보험
                </h3>
                <p className="text-white/80 text-[16px] font-medium leading-relaxed">
                  병원비 걱정 없이<br />우리 가족의 건강을 지켜드려요
                </p>
              </div>

              <div className="mt-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors z-10">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>

              <div className="absolute right-8 bottom-8 w-[180px] h-[180px] transition-transform duration-500 group-hover:scale-105 pointer-events-none">
                <img src="/assets/Banner01.webp" alt="Health" className="w-full h-full object-contain" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default RecommendedInsurance;