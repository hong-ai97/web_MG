import React from 'react';
import { ArrowRight } from 'lucide-react';

const BannerSection: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4">
      <div className="w-full relative rounded-[24px] overflow-hidden group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-500 min-h-[320px] flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/jeju_bg_flipped.png"
            alt="Jeju Training Center"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Dim Overlay (40%) */}
        <div className="absolute inset-0 z-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/30"></div>

        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 text-white relative z-10 w-full">
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold w-fit mb-4 border border-white/30 uppercase tracking-wider">
              Relaxation
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight leading-tight drop-shadow-sm">제주 연수원에서의<br />특별한 휴식</h2>
            <p className="text-white/90 text-sm md:text-base mb-8 font-medium leading-relaxed drop-shadow-sm break-keep">
              제주에의 휴식, 다양한 부대시설을 갖추고 있는 고품격 휴양형 연수원 입니다.
            </p>
            <div className="flex items-center gap-2 font-bold text-sm bg-white text-gray-900 w-fit px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all cursor-pointer">
              예약하기 <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;