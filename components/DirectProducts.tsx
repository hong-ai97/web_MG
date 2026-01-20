
import React, { useRef } from 'react';
import { DIRECT_PRODUCTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const ProductIcon: React.FC<{ id: number; title: string }> = ({ id, title }) => {
  // Mapping provided IDs to the requested URLs
  const imageUrls: Record<number, string> = {
    1: "https://i.ibb.co/20k3Qmd4/driver.png",
    2: "https://i.ibb.co/DHWjWjQK/cancer.png",
    3: "https://i.ibb.co/nN96JKKN/travel.png",
    4: "https://i.ibb.co/RkRxGY9q/house.png"
  };

  const src = imageUrls[id] || `https://placehold.co/120x120/F3F4F6/94A3B8/png?text=${title}`;

  return (
    // Resized container to 96x96px (w-[96px] h-[96px])
    <div className="w-[96px] h-[96px] flex items-center justify-center overflow-hidden bg-white shrink-0">
      <img
        src={src}
        alt={title}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.onerror = null; // Prevent infinite loop if fallback fails
          e.currentTarget.src = `https://placehold.co/120x120/F3F4F6/94A3B8/png?text=${encodeURIComponent(title)}`;
        }}
      />
    </div>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // Faster stagger as requested
      delayChildren: 0.1, // Reduced initial delay
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

const DirectProducts: React.FC = () => {
  // Duplicate products to ensure we have at least 8 items for the carousel
  const products = [...DIRECT_PRODUCTS, ...DIRECT_PRODUCTS].map((p, i) => ({ ...p, id: i + 1, originalId: p.id })); // Ensure unique keys

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = 4;
  const maxIndex = products.length - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4">
      {/* Section Header with Navigation UI */}
      <ScrollReveal
        className="flex justify-between items-end mb-8 px-2"
        viewport={{ once: true, amount: 0.8, margin: "0px 0px -20% 0px" }} // VERY Strict trigger: requires significant scrolling
      >
        <div>
          <h2 className="text-3xl font-bold text-[#111111] tracking-tight mb-3">다이렉트 인기 상품</h2>
          <p className="text-gray-500 font-medium">합리적인 보험료로 든든하게 보장받으세요</p>
        </div>

        {/* Slider Navigation UI */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm font-bold text-gray-400 mr-2">
            <span className="text-gray-900">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="opacity-30">/</span>
            <span>{String(products.length).padStart(2, '0')}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#2FA5E9] hover:text-[#2FA5E9] hover:bg-blue-50/50 transition-all active:scale-95">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#2FA5E9] hover:text-[#2FA5E9] hover:bg-blue-50/50 transition-all active:scale-95">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Carousel Container */}
      <div className="overflow-hidden px-2 -mx-2 py-4 -my-4">
        <motion.div
          className="flex transition-transform duration-500 ease-in-out gap-3"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -20% 0px" }} // Also delayed grid
          variants={containerVariants}
        >
          {products.map((product) => (
            <motion.div
              layout // Helps with layout changes if any
              key={`${product.id}-${product.originalId}`}
              variants={itemVariants}
              className="min-w-[calc(25%-9px)] mb-2 group"
            >
              <div className="h-full bg-white rounded-[24px] p-7 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100">
                {/* Text Content Area */}
                <div className="flex flex-col mb-6">
                  <h3 className="text-[20px] font-semibold text-[#111111] mb-2 group-hover:text-[#2FA5E9] transition-colors leading-tight break-keep">
                    {product.title}
                  </h3>
                  <p className="text-[15px] text-[#666666] font-medium leading-snug opacity-90 break-keep">
                    {product.description}
                  </p>
                </div>

                {/* Icon Area: Space to footer is kept at 12px (mb-3) */}
                <div className="flex justify-end mt-auto mb-3">
                  <ProductIcon id={product.originalId} title={product.title} />
                </div>

                {/* Footer Area */}
                <div>
                  <button className="w-full h-10 rounded-[8px] bg-[#EFF8FF] hover:bg-[#2FA5E9] hover:text-white flex items-center justify-center gap-2 text-[#2FA5E9] font-bold transition-all duration-300 group/btn shadow-sm hover:shadow-md">
                    <span className="text-[15px]">자세히 보기</span>
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DirectProducts;
