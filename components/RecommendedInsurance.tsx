import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const RecommendedInsurance: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4">
      <div className="mb-6 px-2">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">고객님께 꼭 필요한 보험</h2>
        <p className="text-gray-500 font-medium">라이프스타일에 맞춘 최적의 상품을 제안합니다</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Future (Vibrant Green) - Swapped Content */}
        <div className="bg-[#16AA6A] rounded-[24px] pl-8 py-8 pr-[56px] relative overflow-hidden group transition-all hover:shadow-lg hover:-translate-y-1">
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
            <div>
              {/* Tag */}


              <h3 className="text-2xl font-bold text-white mb-2 leading-tight break-keep">
                부담 없는 보험료로<br />미래 준비하기
              </h3>

              <p className="text-white/80 font-medium leading-relaxed text-sm break-keep">
                2030 세대를 위한 필수 보장만<br />모아 합리적으로 설계했어요
              </p>
            </div>

            <button className="w-fit h-9 px-4 bg-white text-[#16AA6A] rounded-full font-bold text-xs shadow-sm mt-6 flex items-center justify-center gap-1 transition-all hover:bg-green-50">
              지금 확인하기 <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Icon - Center Right */}
          <div className="absolute right-[56px] top-1/2 -translate-y-1/2 w-[160px] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
            <img src="/assets/images/icon_sprout_umbrella.png" alt="Future Icon" className="w-full object-contain drop-shadow-sm opacity-95" />
          </div>
        </div>

        {/* Card 2: Health (Vibrant Blue) - Swapped Content */}
        <div className="bg-[#2FA4E8] rounded-[24px] pl-8 py-8 pr-[56px] relative overflow-hidden group transition-all hover:shadow-lg hover:-translate-y-1">
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
            <div>
              {/* Tag */}


              <h3 className="text-2xl font-bold text-white mb-2 leading-tight break-keep">
                온 가족 건강지킴이<br />종합 건강보험
              </h3>
              <p className="text-white/80 font-medium leading-relaxed text-sm break-keep">
                병원비 걱정 없이<br />우리 가족의 건강을 지켜드려요
              </p>
            </div>

            <button className="w-fit h-9 px-4 bg-white text-[#2FA4E8] rounded-full font-bold text-xs shadow-sm mt-6 flex items-center justify-center gap-1 transition-all hover:bg-blue-50">
              지금 확인하기 <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Icon - Center Right */}
          <div className="absolute right-[56px] top-1/2 -translate-y-1/2 w-[160px] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
            <img src="/assets/images/icon_gift_heart.png" alt="Health Icon" className="w-full object-contain drop-shadow-sm opacity-95" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedInsurance;