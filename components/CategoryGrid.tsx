
import React, { useState } from 'react';
import { CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const getMockProductsForCategory = (categoryId: number, categoryLabel: string) => {
  const products = [
    { id: 1, title: "MG더주는암간병비공제", desc: "든든한 건강 지킴이", price: "월 5만원부터", tag: "암", isHot: true },
    { id: 2, title: "MG더좋은우리아이공제", desc: "사랑하는 우리 아이를 위해", price: "월 5만원부터", tag: "어린이", isHot: false },
    { id: 3, title: "MG365일가족간병공제", desc: "병원비 100세까지 보장", price: "월 10만원부터", tag: "종신/보장", isHot: false },
    { id: 4, title: "MG연금저축", desc: "안정적인 노후 준비", price: "월 10만원부터", tag: "연금", isHot: false },
    { id: 5, title: "MG더주는암간병비공제", desc: "든든한 건강 지킴이", price: "월 5만원부터", tag: "암", isHot: false },
    { id: 6, title: "MG더좋은우리아이공제", desc: "사랑하는 우리 아이를 위해", price: "월 5만원부터", tag: "어린이", isHot: false },
    { id: 7, title: "MG365일가족간병공제", desc: "병원비 100세까지 보장", price: "월 10만원부터", tag: "종신/보장", isHot: false },
    { id: 8, title: "MG연금저축", desc: "안정적인 노후 준비", price: "월 10만원부터", tag: "연금", isHot: false },
    { id: 9, title: "MG365일가족간병공제", desc: "병원비 100세까지 보장", price: "월 10만원부터", tag: "종신/보장", isHot: false },
  ];
  return products;
};

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
};

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const CategoryGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);
  const activeProducts = getMockProductsForCategory(activeTab, CATEGORIES.find(c => c.id === activeTab)?.label || '');

  return (
    <motion.section
      className="max-w-[1600px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Header: Title Left, Tabs Right (based on image) */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
        <motion.div className="px-1" variants={headerVariants}>
          <h2 className="text-[40px] font-bold text-[#111111] leading-tight tracking-tight">
            모든 상품을<br />
            한 눈에 모아 봐요
          </h2>
        </motion.div>

        {/* Tabs: Pill Style (Chip) */}
        <motion.div className="flex flex-wrap gap-2 mt-8 lg:mt-0" variants={headerVariants}>
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`
                px-5 py-2.5 rounded-full text-[15px] font-bold transition-all border
                ${activeTab === category.id
                  ? 'bg-[#111111] border-[#111111] text-white'
                  : 'bg-transparent border-[#111111] text-[#111111] hover:bg-black/5'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid Container: Square Aspect Ratio */}
      <motion.div className="grid grid-cols-2 lg:grid-cols-5 gap-4" variants={contentVariants}>
        {activeProducts.map((product, idx) => (
          <motion.div key={idx} variants={itemVariants} className="group">
            <div className="bg-white rounded-[32px] p-8 aspect-square border border-transparent hover:bg-[#174291] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden">

              <div className="z-10 w-full relative">
                {/* Tags */}
                <div className="flex gap-1.5 mb-5">
                  <span className="bg-blue-50 text-[#2FA5E9] text-[13px] font-extrabold px-3 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors">
                    {product.tag}
                  </span>
                  {product.isHot && (
                    <span className="bg-sky-100 text-sky-600 text-[13px] font-extrabold px-3 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors">인기상품</span>
                  )}
                </div>

                {/* Title & Desc */}
                <h3 className="text-[22px] font-bold text-gray-900 mb-1 leading-snug group-hover:text-white transition-colors break-keep">
                  {product.title}
                </h3>
                <p className="text-[16px] text-[#666666] font-medium break-keep leading-relaxed group-hover:text-white/80 transition-colors">{product.desc}</p>
              </div>

              {/* Icon - Bottom Right (80*80px) */}
              <div className="absolute right-8 bottom-8 w-20 h-20 group-hover:scale-110 transition-transform duration-500">
                <img
                  src={product.tag.includes('암') ? '/assets/images/icons/icon_cancer_3d.png' : product.tag.includes('어린이') ? '/assets/images/icons/icon_children_3d.png' : product.tag.includes('연금') ? '/assets/images/icons/icon_piggy_bank_new.png' : '/assets/images/icons/icon_home_3d.png'}
                  alt="Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}

        {/* 'See More' Card: Maintain 1:1 Ratio */}
        <motion.div variants={itemVariants} className="group">
          <div className="bg-gray-50/50 rounded-[32px] aspect-square border-2 border-dashed border-gray-200 hover:border-[#2FA5E9] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-6">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-[#2FA5E9] group-hover:scale-110 shadow-sm transition-all">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="block text-[18px] font-bold text-gray-800 mb-1 group-hover:text-[#2FA5E9] transition-colors">
                {CATEGORIES.find(c => c.id === activeTab)?.label}
              </span>
              <span className="text-[14px] text-gray-400">전체보기</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section >
  );
};

export default CategoryGrid;