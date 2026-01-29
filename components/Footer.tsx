import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] text-gray-400 py-12 text-sm mt-[120px]">
      <div className="max-w-[1920px] mx-auto px-[160px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-gray-700 pb-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-medium text-gray-300">
            <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
            <li><a href="#" className="hover:text-white">신용정보활용체제</a></li>
            <li><a href="#" className="hover:text-white">보험약관</a></li>
            <li><a href="#" className="hover:text-white">전자민원접수</a></li>
            <li><a href="#" className="hover:text-white">경영공시</a></li>
          </ul>
          <div className="flex gap-4">
            <select className="bg-[#444] text-white border-none rounded px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-gray-500">
              <option>관련사이트 바로가기</option>
              <option>MG새마을금고</option>
              <option>MG체크카드</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img src="/assets/images/logo_mg_new.png" alt="MG새마을금고 보험" className="h-4 mb-4 brightness-0 invert opacity-70" />
            <address className="not-italic leading-loose text-xs md:text-sm">
              서울특별시 강남구 테헤란로 000 MG새마을금고중앙회<br />
              대표전화: 1599-9000 | 해외: 82-2-1234-5678<br />
              Copyright © MG Community Credit Cooperatives. All Rights Reserved.
            </address>
          </div>
          <div className="flex items-center gap-4">
            <img src="https://placehold.co/100x40/555/AAA/png?text=WA+Mark" alt="Web Accessibility" className="opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://placehold.co/100x40/555/AAA/png?text=ISMS" alt="ISMS" className="opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;