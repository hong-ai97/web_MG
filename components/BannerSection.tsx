
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const BannerSection: React.FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto">
      <ScrollReveal className="w-full" delay={0.3}>
        <div className="relative rounded-[32px] overflow-hidden group cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700 min-h-[520px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/images/jeju_bg_flipped.png"
              alt="Jeju Training Center"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          {/* Dim Overlay (Darker for better text legibility as seen in image) */}
          <div className="absolute inset-0 z-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/40"></div>

          {/* Content Area */}
          <div className="relative z-10 w-full px-20 py-16 text-white">
            <div className="flex flex-col items-start max-w-3xl">
              {/* Category Label */}
              <span className="text-[14px] font-bold tracking-[0.2em] mb-6 opacity-80 uppercase">Training Center</span>

              {/* Main Heading: Expanded and polished */}
              <h2 className="text-[36px] font-bold mb-10 tracking-tight leading-[1.3] drop-shadow-md break-keep">
                MG새마을금고 제주 연수원에서 즐기는<br />
                특별한 휴식과 진정한 쉼의 가치
              </h2>

              {/* Button: Matches the "자세히 보기 ->" style in the image */}
              <div className="flex items-center gap-4 group/btn">
                <span className="text-[16px] font-bold tracking-tight opacity-80 group-hover/btn:opacity-100 transition-opacity">자세히 보기</span>
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center transition-all group-hover/btn:bg-white group-hover/btn:border-white group-hover/btn:text-gray-900">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default BannerSection;