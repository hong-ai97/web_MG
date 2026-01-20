import React, { useState } from 'react';
import { CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

// Mock data generator for tab content
const getMockProductsForCategory = (categoryId: number, categoryLabel: string) => {
  // Static list for specific products as requested, 9 items + 1 See More card
  const products = [
    {
      id: 1, title: "MG더주는암간병비공제", desc: "든든한 건강 지킴이", price: "월 5만원부터", tag: "암", isHot: true
    },
    {
      id: 2, title: "MG더좋은우리아이공제", desc: "사랑하는 우리 아이를 위해", price: "월 5만원부터", tag: "어린이", isHot: false
    },
    {
      id: 3, title: "MG365일가족든든간병공제", desc: "병원비 100세까지 보장", price: "월 10만원부터", tag: "종신/보장", isHot: false
    },
    {
      id: 4, title: "MG연금저축", desc: "안정적인 노후 준비", price: "월 10만원부터", tag: "연금", isHot: false
    },
    {
      id: 5, title: "MG더주는암간병비공제", desc: "든든한 건강 지킴이", price: "월 5만원부터", tag: "암", isHot: false
    },
    {
      id: 6, title: "MG더좋은우리아이공제", desc: "사랑하는 우리 아이를 위해", price: "월 5만원부터", tag: "어린이", isHot: false
    },
    {
      id: 7, title: "MG365일가족든든간병공제", desc: "병원비 100세까지 보장", price: "월 10만원부터", tag: "종신/보장", isHot: false
    },
    {
      id: 8, title: "MG연금저축", desc: "안정적인 노후 준비", price: "월 10만원부터", tag: "연금", isHot: false
    },
    {
      id: 9, title: "MG365일가족든든간병공제", desc: "병원비 100세까지 보장", price: "월 10만원부터", tag: "종신/보장", isHot: false
    },
  ];

  return products;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // Faster stagger
      delayChildren: 0.1,
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

const CategoryGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);

  const activeProducts = getMockProductsForCategory(
    activeTab,
    CATEGORIES.find(c => c.id === activeTab)?.label || ''
  );

  return (
    <section className="max-w-[1280px] mx-auto px-4">
      <ScrollReveal className="mb-8 px-1">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-3 tracking-tight">모든 상품을 한눈에</h2>
        <p className="text-gray-500 font-medium">원하시는 상품의 카테고리를 선택해보세요.</p>
      </ScrollReveal>

      {/* Tabs */}
      <ScrollReveal
        className="mb-6 overflow-x-auto scrollbar-hide px-1"
        width="100%"
      >
        <div
          className="flex gap-1 min-w-max border-b border-gray-100 pb-0"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`
                relative px-4 py-3 text-base md:text-lg font-bold transition-all whitespace-nowrap
                ${activeTab === category.id
                  ? 'text-[#111111]'
                  : 'text-[#999999] hover:text-[#555555]'
                }
              `}
            >
              {category.label}
              {activeTab === category.id && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#111111]"></div>
              )}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Grid Container with Shared Trigger */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-5 gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} // Slightly earlier than 0.2 because the grid is tall
        variants={containerVariants}
      >
        {activeProducts.map((product, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group h-full min-h-[230px]"
          >
            <div className="bg-white rounded-[24px] p-6 pb-4 border border-transparent hover:border-blue-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between h-full">
              {/* Content Container */}
              <div className="z-10 w-full">
                {/* Header: Tags */}
                <div className="flex gap-1 mb-3">
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-extrabold px-2 py-1 rounded-full tracking-wide flex items-center gap-1">
                    {product.tag}
                  </span>
                  {product.isHot && (
                    <span className="bg-sky-100 text-sky-600 text-[10px] font-extrabold px-2 py-1 rounded-full tracking-wide">인기상품</span>
                  )}
                </div>

                {/* Title & Desc */}
                <h3 className="text-[17px] font-bold text-gray-900 mb-1 leading-tight group-hover:text-[#2FA5E9] transition-colors break-keep pr-8">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium break-keep pr-8">{product.desc}</p>
              </div>

              {/* Icon - Gap 24px from top text, Right Aligned */}
              <div className="relative mt-2 self-end w-[56px] h-[56px] transition-transform duration-500 group-hover:scale-110">
                <img
                  src={(function () {
                    const tag = product.tag;
                    if (tag.includes('암') || tag.includes('건강')) return '/assets/images/icons/icon_cancer_3d.png';
                    if (tag.includes('어린이')) return '/assets/images/icons/icon_children_3d.png';
                    if (tag.includes('연금') || tag.includes('저축')) return '/assets/images/icons/icon_piggy_bank_new.png';
                    return '/assets/images/icons/icon_home_3d.png';
                  })()}
                  alt={`${product.tag} Icon`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Footer: Price - Gap 16px from Icon */}
              <div className="w-full text-left z-10">
                <p className="text-xs text-gray-400 font-normal border-t border-gray-100 pt-3">{product.price}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* 'See More' Card (10th Item) */}
        <motion.div
          variants={itemVariants}
          className="h-full min-h-[230px] group"
        >
          <div className="h-full w-full bg-gray-50/50 rounded-[24px] border-2 border-dashed border-gray-200 hover:border-[#2FA5E9] hover:bg-blue-50/10 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-[#2FA5E9] group-hover:scale-110 shadow-sm transition-all duration-300">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="block text-lg font-bold text-gray-800 mb-1 group-hover:text-[#2FA5E9] transition-colors">
                {CATEGORIES.find(c => c.id === activeTab)?.label}
              </span>
              <span className="text-sm text-gray-500">전체보기</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section >
  );
};

export default CategoryGrid;