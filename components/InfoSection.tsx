import React from 'react';
import { NOTICES } from '../constants';
import { ChevronRight, Smartphone, MapPin, HelpCircle, FileText, Download, Bell } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

        {/* Column 1: Notices & Utilities (Span 8) */}
        <div className="lg:col-span-8 flex flex-col gap-3">

          {/* Notices Card */}
          <div className="bg-white rounded-[24px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-transparent hover:border-gray-100 transition-colors h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#2FA5E9]" /> 공지사항
              </h3>
              <a href="#" className="text-xs font-bold text-gray-500 hover:text-gray-900 bg-gray-50 px-3 py-1.5 rounded-[12px] transition-colors">
                더보기
              </a>
            </div>
            <ul className="flex flex-col">
              {NOTICES.map((notice) => (
                <li key={notice.id} className="group cursor-pointer py-4 border-b border-gray-100 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <span className="inline-flex justify-center w-[52px] py-1 bg-blue-50 text-[#2FA5E9] text-[11px] font-bold rounded-[8px] whitespace-nowrap flex-shrink-0">
                        {notice.category.replace(/[\[\]]/g, '')}
                      </span>
                      <span className="text-gray-700 font-medium text-sm md:text-base group-hover:text-[#2FA5E9] truncate transition-colors">
                        {notice.title}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs ml-auto md:ml-0 whitespace-nowrap font-medium">{notice.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Grid */}
          <div className="grid grid-cols-3 gap-3">
            <a href="#" className="bg-white rounded-[16px] p-5 flex flex-col items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-blue-100">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-[20px] text-gray-600 group-hover:bg-[#2FA5E9] group-hover:text-white transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-gray-700">지점찾기</span>
            </a>
            <a href="#" className="bg-white rounded-[16px] p-5 flex flex-col items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-blue-100">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-[20px] text-gray-600 group-hover:bg-[#2FA5E9] group-hover:text-white transition-all duration-300">
                <HelpCircle className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-gray-700">자주하는 질문</span>
            </a>
            <a href="#" className="bg-white rounded-[16px] p-5 flex flex-col items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-blue-100">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-[20px] text-gray-600 group-hover:bg-[#2FA5E9] group-hover:text-white transition-all duration-300">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-gray-700">서류안내</span>
            </a>
          </div>
        </div>

        {/* Column 2: App Download (Span 4) */}
        <div className="lg:col-span-4">
          <div className="bg-[#2FA5E9] rounded-[24px] p-8 h-full min-h-[320px] flex flex-col relative overflow-hidden group shadow-lg shadow-blue-200/50 hover:shadow-blue-300/60 transition-shadow">
            <div className="z-10 text-white flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-4 relative z-10">
                <div>
                  <span className="inline-block px-3 py-0.5 mb-3 rounded-full border border-white text-white text-[12px] font-bold">App</span>
                  <h3 className="text-3xl font-bold mb-3 leading-tight tracking-tight">
                    MG새마을금고<br />보험 앱
                  </h3>
                  <p className="text-blue-100 text-sm font-medium leading-relaxed">
                    언제 어디서나 쉽고 빠르게!<br />
                    내 손안의 보험 서비스를 만나보세요.
                  </p>
                </div>
                {/* Icon */}
                <div className="w-[96px] h-[96px] transition-transform duration-500 group-hover:scale-110 flex-shrink-0">
                  <img src="/assets/images/icon_app_download_new.png" alt="App Icon" className="w-full h-full object-contain drop-shadow-md" />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-auto relative z-10">
                <button className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-[#2FA5E9] py-3.5 rounded-[16px] text-sm font-bold shadow-sm transition-colors">
                  <Download className="w-4 h-4" /> Google Play
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#1E88E5] hover:bg-[#1976D2] text-white py-3.5 rounded-[16px] text-sm font-bold shadow-inner transition-colors border border-blue-400">
                  <Download className="w-4 h-4" /> App Store
                </button>
              </div>
            </div>

            {/* Decorative Background */}
            <div className="absolute top-1/2 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;