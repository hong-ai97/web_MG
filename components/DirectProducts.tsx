
import React from 'react';
import { DIRECT_PRODUCTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductIcon: React.FC<{ id: number; title: string }> = ({ id, title }) => {
  const imageUrls: Record<number, string> = {
    1: "/assets/direct-icon-1.png",
    2: "/assets/direct-icon-2.png",
    3: "/assets/direct-icon-3.png",
    4: "/assets/direct-icon-4.png",
    5: "/assets/direct-icon-5.png",
    6: "/assets/direct-icon-6.png"
  };

  const src = imageUrls[id] || `https://placehold.co/120x120/F3F4F6/94A3B8/png?text=${title}`;

  return (
    <div className="w-[140px] h-[140px] flex items-center justify-center overflow-hidden shrink-0">
      <img
        src={src}
        alt={title}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://placehold.co/120x120/F3F4F6/94A3B8/png?text=${encodeURIComponent(title)}`;
        }}
      />
    </div>
  );
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const DirectProducts: React.FC = () => {
  const products = [...DIRECT_PRODUCTS, ...DIRECT_PRODUCTS, ...DIRECT_PRODUCTS];

  return (
    <motion.section
      className="w-full pb-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <motion.div
        className="max-w-[1600px] mx-auto px-4 flex justify-between items-end mb-16"
        variants={headerVariants}
      >
        <div className="flex flex-col gap-2 text-left">
          <h2 className="text-[40px] font-bold text-[#111] leading-tight tracking-tight">
            다이렉트 인기상품<br />
            한 눈에 보기
          </h2>
        </div>

        <div className="flex items-center gap-6 pb-2">
          <div className="flex items-center gap-2 text-sm font-bold px-2 py-2">
            <span className="text-gray-900">01</span>
            <span className="text-gray-200">/</span>
            <span className="text-gray-400">08</span>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-[#333] hover:bg-black transition-all shadow-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-[#333] hover:bg-black transition-all shadow-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-[54px]"
          animate={{
            x: ["0px", `-${(290 + 54) * 6}px`],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {products.map((product, idx) => (
            <div
              key={idx}
              className="shrink-0 flex flex-col items-center pt-12"
              style={{ width: "290px" }}
            >
              <div
                className="bg-[#E2E6F1] rounded-full relative flex flex-col items-center shrink-0 mt-[10px]"
                style={{ width: "290px", height: "130px" }}
              >
                <div className="absolute top-0 -translate-y-[33px]">
                  <ProductIcon id={product.id} title={product.title} />
                </div>
              </div>
              <span className="mt-[30px] text-[#111] font-bold text-[17px] tracking-tight whitespace-nowrap">
                {product.title}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DirectProducts;
