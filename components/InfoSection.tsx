
import React from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const InfoSection: React.FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">

        {/* Left: News Card (Index 05) */}
        <ScrollReveal delay={0.1} duration={1.2}>
          <div className="bg-white rounded-[48px] p-14 h-full flex flex-col border border-gray-50">
            <div className="mb-10 text-left">
              <span className="text-[14px] font-bold text-[#008BF0] block mb-4 uppercase">News</span>
              <h3 className="text-[36px] font-bold text-[#111] tracking-tighter mb-6">새마을 금고 소식</h3>
              <div className="w-full h-px bg-gray-100"></div>
            </div>

            <div className="flex-1 flex flex-col mb-10">
              <ul className="flex flex-col gap-6">
                {[
                  { title: '보험약관 개정 안내 (2024.05.20 시행)', date: '2024.05.10' },
                  { title: '다이렉트 보험료 확인하고 커피 받자!', date: '2024.05.01' },
                  { title: 'MG새마을금고 보험, 소비자 만족도 1위 수상', date: '2024.04.28' },
                  { title: '시스템 정기 점검 안내 (5월 15일)', date: '2024.04.20' },
                  { title: '금융소비자보호법 시행에 따른 서비스 변경 안내', date: '2024.04.15' },
                  { title: '개인정보처리방침 개정 안내 (2024.04.01)', date: '2024.04.01' }
                ].map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center group/item cursor-pointer">
                    <span className="text-[17px] text-[#333] font-medium group-hover/item:text-[#008BF0] transition-colors truncate">
                      {item.title}
                    </span>
                    <span className="text-[15px] text-[#999] font-medium shrink-0">
                      {item.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-5 border border-[#111] rounded-2xl flex items-center justify-center gap-2 group hover:bg-[#111] transition-all">
              <span className="text-[18px] font-bold text-[#111] group-hover:text-white transition-colors">자세히 보기</span>
              <ChevronRight className="w-4 h-4 text-[#111] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </ScrollReveal>

        {/* Right: Customer Support Card (Index 06) */}
        <ScrollReveal delay={0.2} duration={1.2}>
          <div className="bg-[#008BF0] rounded-[48px] p-14 h-full flex flex-col">
            <div className="mb-14 text-left">
              <span className="text-[14px] font-bold text-white/70 block mb-4 uppercase">Service</span>
              <h3 className="text-[36px] font-bold text-white tracking-tighter leading-[1.25]">
                가장 가까운<br />
                든든한 파트너
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-14 flex-1">
              {[
                { label: '지점안내', sub: '가까운 매장을 찾아보세요', icon: '/assets/images/icons/icon_location_3d.png' },
                { label: 'FAQ', sub: '자주 묻는 질문을 모았어요', icon: '/assets/images/icons/icon_megaphone_3d.png' },
                { label: '서류안내', sub: '필요한 서류를 확인하세요', icon: '/assets/images/icons/icon_document_3d.png' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 rounded-[20px] p-8 pt-12 pb-10 flex flex-col items-center text-center backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer group/item min-h-[220px]">
                  <div className="w-20 h-20 mb-6 transition-transform group-hover/item:scale-110 duration-500 flex items-center justify-center">
                    <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[18px] font-bold text-white mb-2">{item.label}</span>
                  <span className="text-[15px] text-white/70 font-semibold leading-relaxed break-keep">{item.sub}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-white rounded-2xl flex items-center justify-center gap-2 group hover:bg-blue-50 transition-all">
              <span className="text-[18px] font-bold text-[#008BF0]">전체 서비스 보기</span>
              <ChevronRight className="w-4 h-4 text-[#008BF0] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default InfoSection;