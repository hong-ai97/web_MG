
import React from 'react';
import { User, Building2, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full pt-[80px]">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

        {/* Top Hero Layout: Main Visual + Login Box */}
        <div className="flex flex-col lg:flex-row gap-4">

          {/* Main Visual Section (Blue Background) */}
          <ScrollReveal
            className="flex-1 min-h-[600px]"
            delay={0}
            duration={1.5}
          >
            <div className="relative bg-[#018BEE] rounded-[32px] overflow-hidden h-full flex flex-col justify-between py-12 px-14 shadow-[0_20px_40px_rgba(1,139,238,0.2)]">
              {/* Top: Title Content */}
              <div className="relative z-20 w-1/2">
                <span className="w-fit px-3 py-1 rounded-full border border-white/30 text-white/90 text-[13px] font-bold mb-4 inline-block">
                  MG새마을금고 보험
                </span>
                <h1 className="text-[40px] font-bold text-white leading-tight tracking-tight mb-6 break-keep">
                  온라인에서 간편하게<br />
                  조회하는 새마을금고 보험
                </h1>
                <p className="text-white/80 text-lg font-medium leading-relaxed break-keep">
                  언제나 곁에서 힘이 되는 든든한 파트너,<br />
                  MG새마을금고와 함께 하세요
                </p>
              </div>

              {/* Bottom: Indicators Left-Aligned */}
              <div className="relative z-20 flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
              </div>

              {/* Right Content: New Main Visual Image (Full Fit) */}
              <div className="absolute inset-0 w-full h-full z-10">
                <img
                  src="/assets/main-hero-new.png"
                  alt="Main Hero Visual"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Login & Banner Section */}
          <div className="lg:w-[380px] flex flex-col gap-2">
            {/* Login Card (Clean White) */}
            <ScrollReveal
              className="flex-1"
              delay={0.2}
              duration={1.5}
            >
              <div className="bg-white rounded-[32px] flex flex-col justify-between relative shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 h-full overflow-hidden">
                {/* Top: Login Prompt & Icon (Layered) */}
                <div className="flex-1 flex flex-col justify-start pt-[56px] px-8 w-full relative overflow-hidden">
                  <div className="w-full text-left flex flex-col gap-1 relative z-20">
                    <p className="text-[#666666] font-medium text-[18px] leading-snug">
                      안전하고 든든한 보장<br />
                      MG새마을금고에서
                    </p>
                    <h2 className="text-[31px] font-bold text-[#111] leading-tight mt-2 tracking-tight">
                      로그인해 주세요!
                    </h2>
                  </div>

                  {/* Icon Block: Moved 20px down and 30px left */}
                  <div className="absolute right-[20px] top-[160px] z-10">
                    <div className="relative w-[120px] h-[120px] animate-floating opacity-90">
                      <img src="/assets/login-lock-3d.png" alt="Login Icon" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>

                {/* Bottom: Buttons */}
                <div className="px-8 pb-10">
                  <div className="flex justify-center gap-2 w-full">
                    <button className="flex-1 h-12 bg-[#174291] hover:bg-[#113170] text-white rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
                      <User className="w-4 h-4" />
                      <span className="font-bold text-[14px]">개인회원</span>
                    </button>
                    <button className="flex-1 h-12 bg-[#174291] hover:bg-[#113170] text-white rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
                      <Building2 className="w-4 h-4" />
                      <span className="font-bold text-[14px]">법인회원</span>
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Dark Banner Card (#444444) */}
            <ScrollReveal
              delay={0.4}
              duration={1.5}
            >
              <div className="bg-[#444444] rounded-[32px] p-8 h-[160px] relative overflow-hidden group cursor-pointer shadow-lg active:scale-[0.98] transition-transform flex flex-col justify-between">
                <div className="relative z-10">
                  <span className="text-white/60 text-xs font-bold tracking-widest uppercase mb-2 block">D-DAY</span>
                  <h3 className="text-white text-[20px] font-bold leading-tight mb-3">
                    금리 인상기 부가혜택은?😉
                  </h3>
                  {/* "Go to" Text Button style: weight 500 */}
                  <div className="flex items-center gap-1 text-white group-hover:translate-x-1 transition-transform">
                    <span className="text-[13px] font-medium">바로가기</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Right: Indicators (3 dots) */}
                <div className="relative z-10 flex gap-1.5 items-center mb-1 justify-end">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
