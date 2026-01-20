
import React, { useState, useEffect } from 'react';
import { Search, FileText, CreditCard, HandCoins, Calculator, User, Building2, FileCheck, Inbox, Printer, ChevronLeft, ChevronRight, Pause } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-3">

        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 h-auto lg:h-[480px]">

          {/* Left: Visual Area (Banner Style) */}
          <div className="lg:col-span-8 relative mesh-gradient-bg rounded-[32px] overflow-hidden group shadow-[0_20px_40px_-12px_rgba(47,165,233,0.2)] transition-all duration-500">


            <img
              src="/assets/main_icon.webp"
              alt="Main Visual Icon"
              className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[40%] lg:w-[35%] object-contain z-10"
            />



            <div className="relative z-20 h-full flex flex-col justify-start px-8 md:px-14 pt-16 md:pt-20">
              <span className="text-white text-sm font-bold mb-6 inline-block">
                MG새마을금고 보험
              </span>

              <h1 className="text-3xl md:text-[40px] font-bold text-white leading-tight tracking-tight drop-shadow-sm mb-4 break-keep flex flex-col gap-[4px]">
                <span>온라인에서 간편하게</span>
                <span className="text-white">조회하는 새마을금고</span>
              </h1>

              <p className="text-blue-50 text-base md:text-lg font-medium opacity-90 leading-relaxed">
                언제나 곁에서 힘이되는 든든한 파트너,<br />
                MG새마을금고와 함께하세요
              </p>

              <div className="mt-[64px]">
                <button className="flex items-center gap-2 bg-white text-[#1D8ED3] font-extrabold px-8 h-12 rounded-full w-fit transition-all hover:-translate-y-0.5 group/btn border border-white">
                  <span className="text-lg">바로가기</span>
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 z-30 flex items-center gap-4 bg-black/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
              <div className="flex items-center gap-2 text-white/90 text-sm font-bold">
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

          {/* Right: Login & Action */}
          <div className="lg:col-span-4 bg-white rounded-[32px] p-8 flex flex-col items-center justify-center relative shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100/50 text-center">
            <h2 className="text-xl md:text-[22px] font-bold text-gray-800 leading-snug mb-6 mt-6">
              로그인 후 모든 서비스를<br />
              <span className="text-gray-900">이용해보세요!</span>
            </h2>



            <div className="flex gap-2 w-full mb-10 px-2">
              <button className="w-[154px] h-[48px] bg-[#174291] hover:bg-black text-white rounded-[8px] flex flex-col md:flex-row items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-1 active:scale-[0.98] group">
                <User className="w-5 h-5 opacity-90 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                <span className="font-bold text-[15px]">개인회원</span>
              </button>
              <button className="w-[154px] h-[48px] bg-[#174291] hover:bg-black text-white rounded-[8px] flex flex-col md:flex-row items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-1 active:scale-[0.98] group">
                <Building2 className="w-5 h-5 opacity-90 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                <span className="font-bold text-[15px]">법인회원</span>
              </button>
            </div>

            <div className="w-[80%] h-px bg-gray-100 mb-8"></div>

            <div className="w-full">
              <h3 className="text-base md:text-lg font-bold text-[#666666] leading-snug mb-8">
                로그인 없이 이용 가능해요.
              </h3>

              <div className="flex justify-center gap-4 px-1">
                <div className="flex flex-col items-center gap-2.5 group cursor-pointer w-24">
                  <div className="w-14 h-14 rounded-[20px] border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-white group-hover:border-[#2FA5E9] transition-all">
                    <FileCheck className="w-6 h-6 text-gray-500 group-hover:text-[#2FA5E9]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[13px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors whitespace-nowrap">개인정보동의</span>
                </div>

                <div className="flex flex-col items-center gap-2.5 group cursor-pointer w-24">
                  <div className="w-14 h-14 rounded-[20px] border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-white group-hover:border-[#2FA5E9] transition-all">
                    <Inbox className="w-6 h-6 text-gray-500 group-hover:text-[#2FA5E9]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[13px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors whitespace-nowrap">보험증권 사서함</span>
                </div>

                <div className="flex flex-col items-center gap-2.5 group cursor-pointer w-24">
                  <div className="w-14 h-14 rounded-[20px] border border-gray-100 flex items-center justify-center bg-gray-50 group-hover:bg-white group-hover:border-[#2FA5E9] transition-all">
                    <Printer className="w-6 h-6 text-gray-500 group-hover:text-[#2FA5E9]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[13px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors whitespace-nowrap">증권 발급 확인</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Menu Block - Reduced internal gaps for compact layout */}
        <div className="relative -mt-0 z-10 bg-white rounded-[32px] p-6 lg:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100/50 hover:border-blue-50 transition-colors">
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
                  <div className="w-[56px] h-[56px] relative flex items-center justify-center">
                    <img
                      src={item.imgSrc}
                      alt={item.label}
                      className="w-[56px] h-[56px] object-contain absolute transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src={item.hoverImgSrc}
                      alt={item.label}
                      className="w-[56px] h-[56px] object-contain absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <span className="font-bold text-gray-600 text-[13px] group-hover:text-gray-900 transition-colors whitespace-nowrap tracking-tight">{item.label}</span>
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
                <span className="text-lg font-extrabold text-gray-800 tracking-tight">최근 이용한 메뉴</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['# 자동차보험 갱신', '# 증명서 발급', '# 고객센터 연결', '# 마이페이지', '# 보험금 청구'].map((tag, i) => (
                  <button key={i} className="px-3 py-2 bg-gray-50 hover:bg-white text-gray-500 hover:text-[#2FA5E9] rounded-full text-xs font-bold transition-all border border-gray-100 hover:border-blue-100 hover:shadow-md">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
