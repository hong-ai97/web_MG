
import React, { useState, useEffect } from 'react';
import { Search, FileText, CreditCard, HandCoins, Calculator, User, Building2, FileCheck, Inbox, Printer, ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-3">

        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 h-auto lg:h-[480px]">

          {/* Left: Visual Area (Banner Style) - Delay 0s */}
          <ScrollReveal
            className="lg:col-span-8 h-full"
            delay={0}
            duration={1.5} // Slower, relaxed feel
            width="100%"
          >
            <div className="relative mesh-gradient-bg rounded-[32px] overflow-hidden group shadow-[0_20px_40px_-12px_rgba(47,165,233,0.2)] transition-all duration-500 h-full">
              <img
                src="/assets/main_icon.webp"
                alt="Main Visual Icon"
                className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[40%] lg:w-[35%] object-contain z-10"
              />

              <div className="relative z-20 h-full flex flex-col justify-start px-8 md:px-14 pt-[56px]">
                <span className="w-fit px-3 py-1 rounded-full border border-white text-white text-[13px] font-bold mb-3 tracking-wide">
                  MG새마을금고
                </span>
                <h1 className="text-3xl md:text-[40px] font-bold text-white leading-tight tracking-tight drop-shadow-sm mb-4 break-keep flex flex-col gap-[4px]">
                  <span>온라인에서 간편하게</span>
                  <span className="text-white">조회하는 새마을금고</span>
                </h1>

                <p className="text-[#ffffff] text-base md:text-lg font-medium leading-relaxed">
                  언제나 곁에서 힘이되는 든든한 파트너,<br />
                  MG새마을금고와 함께하세요
                </p>

                <div className="mt-[64px]">
                  <button className="flex items-center gap-[16px] bg-white pl-[20px] pr-1.5 h-[44px] rounded-full transition-all hover:-translate-y-0.5 group/btn">
                    <span className="text-[#174291] font-bold text-[16px] tracking-tight">바로가기</span>
                    <div className="w-[32px] h-[32px] bg-[#174291] rounded-full flex items-center justify-center group-hover/btn:bg-[#113170] transition-colors">
                      <ChevronRight className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  </button>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 z-30 flex items-center gap-4 bg-black/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
                <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                  <span>02</span>
                  <span className="w-8 h-[1px] bg-white/30"></span>
                  <span className="opacity-60">04</span>
                </div>
                <div className="w-[1px] h-3 bg-white/20"></div>
                <div className="flex items-center gap-2 text-white">
                  <button className="hover:scale-110 transition-transform"><ChevronLeft className="w-4 h-4" /></button>
                  <button className="hover:scale-110 transition-transform"><Pause className="w-3 h-3 fill-current" /></button>
                  <button className="hover:scale-110 transition-transform"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Login & Action - Delay 0.1s */}
          <ScrollReveal
            className="lg:col-span-4 h-full"
            delay={0.2} // Slightly delayed start
            duration={1.5} // Slower duration
            width="100%"
          >
            <div className="bg-white rounded-[32px] flex flex-col justify-between relative shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100/50 text-center h-full overflow-hidden">

              {/* Top: Login Prompt (Expanded Area) */}
              <div className="flex-1 flex flex-col justify-start pt-[56px] px-8 w-full">
                {/* Text Block */}
                <div className="w-full text-left flex flex-col gap-1 pb-1 pl-1">
                  <p className="text-[#111111] font-medium text-[18px] leading-snug">
                    안전하고 든든한 보장<br />
                    MG새마을금고에서
                  </p>
                  <h2 className="text-[30px] font-bold text-[#111111] leading-tight mt-[8px] tracking-tight">
                    로그인해 주세요!
                  </h2>
                </div>

                {/* Icon Block - Right Aligned, Below Text */}
                <div className="w-full flex justify-end pr-2 -mt-[48px]">
                  <div className="relative w-[104px] h-[104px] animate-floating">
                    <img src="/assets/login-lock-3d.png" alt="Login Icon" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Buttons - 40px margin from icon */}
                <div className="flex justify-center gap-1 w-full px-1 mt-8">
                  <button className="w-full h-[48px] bg-[#174291] hover:bg-[#113170] text-white rounded-[8px] flex items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-0.5 active:scale-[0.98] group flex-1">
                    <User className="w-5 h-5 opacity-90" strokeWidth={2.5} />
                    <span className="font-bold text-[15px]">개인회원</span>
                  </button>
                  <button className="w-full h-[48px] bg-[#174291] hover:bg-[#113170] text-white rounded-[8px] flex items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-0.5 active:scale-[0.98] group flex-1">
                    <Building2 className="w-5 h-5 opacity-90" strokeWidth={2.5} />
                    <span className="font-bold text-[15px]">법인회원</span>
                  </button>
                </div>
              </div>

              {/* Bottom: Utilities (Reduced Area, Gray Background) */}
              <div className="w-full bg-[#EFF8FF] py-8 px-4">
                <div className="flex justify-center gap-6">
                  <div className="flex flex-col items-center gap-2 group cursor-pointer w-20">
                    <div className="w-[44px] h-[44px] flex items-center justify-center">
                      <img src="/assets/login-util-icon-1.png" alt="개인정보동의" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[13px] font-medium text-[#444444] group-hover:text-black transition-colors whitespace-nowrap">개인정보동의</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 group cursor-pointer w-20">
                    <div className="w-[44px] h-[44px] flex items-center justify-center">
                      <img src="/assets/login-util-icon-2.png" alt="보험증권 사서함" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[13px] font-medium text-[#444444] group-hover:text-black transition-colors whitespace-nowrap">보험증권 사서함</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 group cursor-pointer w-20">
                    <div className="w-[44px] h-[44px] flex items-center justify-center">
                      <img src="/assets/login-util-icon-3.png" alt="증권 발급 확인" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[13px] font-medium text-[#444444] group-hover:text-black transition-colors whitespace-nowrap">증권 발급 확인</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Quick Menu Block - Delay 0.15s */}
        <ScrollReveal
          className="relative -mt-0 z-10"
          delay={0.3} // Staggered
          duration={1.5}
          width="100%"
        >
          <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:border-blue-50 transition-colors">
            <div className="flex flex-col lg:flex-row items-center">

              {/* Quick Menu: ~55% Width */}
              <div className="w-full lg:w-[55%] flex justify-between md:justify-around px-2 lg:px-4">
                {[
                  { label: '계약조회', imgSrc: '/assets/quick-icon-1.png', hoverImgSrc: '/assets/quick-icon-1-hover.png' },
                  { label: '보험금 청구', imgSrc: '/assets/quick-icon-2.png', hoverImgSrc: '/assets/quick-icon-2-hover.png' },
                  { label: '보험료 납입', imgSrc: '/assets/quick-icon-3.png', hoverImgSrc: '/assets/quick-icon-3-hover.png' },
                  { label: '대출 신청', imgSrc: '/assets/quick-icon-4.png', hoverImgSrc: '/assets/quick-icon-4-hover.png' },
                  { label: '보험계약 대출', imgSrc: '/assets/quick-icon-5.png', hoverImgSrc: '/assets/quick-icon-5-hover.png' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center gap-2 cursor-pointer group">
                    <div className="w-[52px] h-[52px] relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                      <img
                        src={item.imgSrc}
                        alt={item.label}
                        className="w-[52px] h-[52px] object-contain absolute transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={item.hoverImgSrc}
                        alt={item.label}
                        className="w-[52px] h-[52px] object-contain absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    <span className="font-medium text-[#111111] text-[15px] group-hover:text-black transition-colors whitespace-nowrap tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Vertical Divider */}
              <div className="hidden lg:block w-px h-16 bg-gray-100 mx-6"></div>

              {/* Recently Used Menu: ~45% Width */}
              <div className="w-full lg:flex-1 flex flex-col gap-3 lg:pl-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[16px] font-bold text-[#111111] tracking-tight">최근 이용한 메뉴</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {['# 자동차보험 갱신', '# 증명서 발급', '# 고객센터 연결', '# 마이페이지', '# 보험금 청구'].map((tag, i) => (
                    <button key={i} className="px-3 py-1.5 bg-[#f5f5f5] hover:bg-gray-100 text-[#666666] hover:text-[#2FA5E9] rounded-full text-[13px] font-medium transition-all">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
