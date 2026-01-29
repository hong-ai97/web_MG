
import React from 'react';
import { NOTICES } from '../constants';
import { Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const InfoSection: React.FC = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4">
      <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <ScrollReveal className="lg:col-span-8 flex flex-col gap-4" width="100%" delay={0.3}>
          <div className="bg-white rounded-[24px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-transparent hover:border-gray-100 h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[30px] font-bold text-gray-900">공지사항</h3>
              <a href="#" className="text-xs font-bold text-gray-500 hover:text-gray-900 bg-gray-50 px-4 py-2 rounded-full">더보기</a>
            </div>
            <ul className="flex flex-col">
              {NOTICES.slice(0, 5).map((notice) => (
                <li key={notice.id} className="group cursor-pointer py-4 border-b border-gray-100 last:border-0">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 overflow-hidden">
                      <span className="inline-flex justify-center w-[60px] py-1 bg-blue-50 text-[#2FA5E9] text-xs font-bold rounded-lg shrink-0">{notice.category.replace(/[\[\]]/g, '')}</span>
                      <span className="text-gray-700 font-medium text-[18px] group-hover:text-[#2FA5E9] truncate">{notice.title}</span>
                    </div>
                    <span className="text-gray-400 text-[16px] font-medium shrink-0">{notice.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: 'icon_branch', label: '지점찾기' },
              { icon: 'icon_faq', label: '자주하는 질문' },
              { icon: 'icon_doc', label: '서류안내' }
            ].map((item, idx) => (
              <a key={idx} href="#" className="bg-white rounded-[16px] p-6 flex flex-col items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all group border border-transparent hover:border-blue-100">
                <div className="w-14 h-14 relative flex items-center justify-center">
                  <img src={`/assets/icons/${item.icon}.png`} alt={item.label} className="w-full h-full object-contain absolute transition-opacity group-hover:opacity-0" />
                  <img src={`/assets/icons/${item.icon}_hover.png`} alt={item.label} className="w-full h-full object-contain absolute transition-opacity opacity-0 group-hover:opacity-100" />
                </div>
                <span className="text-sm font-medium text-[#111111]">{item.label}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal className="lg:col-span-4" width="100%" delay={0.4}>
          <div className="bg-[#2FA5E9] rounded-[24px] p-8 h-full min-h-[320px] flex flex-col relative overflow-hidden group shadow-lg shadow-blue-200/50">
            <div className="z-10 text-white flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <span className="inline-block px-3 py-1 mb-4 rounded-full border border-white text-white text-xs font-bold">App</span>
                  <h3 className="text-[30px] font-bold mb-4 leading-tight">MG새마을금고<br />보험 앱</h3>
                  <p className="text-blue-50 text-sm font-medium leading-relaxed max-w-[200px]">언제 어디서나 쉽고 빠르게!<br />내 손안의 보험 서비스</p>
                </div>
                <div className="w-24 h-24 group-hover:scale-110 transition-transform flex-shrink-0">
                  <img src="/assets/images/icon_app_download_new.png" alt="App Icon" className="w-full h-full object-contain drop-shadow-md" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-auto relative z-10">
                <button className="flex items-center justify-center gap-2 bg-white text-[#2FA5E9] py-3.5 rounded-lg text-sm font-bold transition-colors hover:bg-blue-50"><Download className="w-4 h-4" /> Google Play</button>
                <button className="flex items-center justify-center gap-2 bg-[#1E88E5] text-white py-3.5 rounded-lg text-sm font-bold transition-colors hover:bg-[#1976D2]"><Download className="w-4 h-4" /> App Store</button>
              </div>
            </div>
            <div className="absolute top-1/2 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </ScrollReveal>
      </ScrollReveal>
    </section>
  );
};

export default InfoSection;