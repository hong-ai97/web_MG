import React, { useState, useEffect } from 'react';
import { Menu, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100' : 'bg-white border-b border-gray-100'
      }`}>
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <img src="/assets/images/logo_mg_new.png" alt="MG새마을금고 보험" className="h-5 object-contain" />
        </div>

        {/* Desktop GNB */}
        <nav className="hidden md:flex items-center gap-12">
          {['상품소개', '상담/가입', '계약관리', '보상서비스', '고객센터'].map((item) => (
            <a key={item} href="#" className="relative text-gray-600 font-semibold hover:text-[#2FA5E9] transition-colors py-2 group">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2FA5E9] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Utilities */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-500">
            <button className="hover:text-[#2FA5E9] transition-colors">로그인</button>
            <button className="hover:text-[#2FA5E9] transition-colors">회원가입</button>
          </div>
          <div className="h-4 w-[1px] bg-gray-300 hidden md:block"></div>

          <div className="flex items-center gap-1">
            <button className="p-2.5 hover:bg-gray-100/80 rounded-full transition-colors group">
              <Search className="w-5 h-5 text-gray-600 group-hover:text-[#2FA5E9] transition-colors" />
            </button>
            <button
              className="p-2.5 hover:bg-gray-100/80 rounded-full transition-colors md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <button className="hidden md:block p-2.5 hover:bg-gray-100/80 rounded-full transition-colors">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {['상품소개', '상담/가입', '계약관리', '보상서비스', '고객센터'].map((item) => (
            <a key={item} href="#" className="block text-gray-800 font-bold text-lg py-2 hover:text-[#2FA5E9] transition-colors">{item}</a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;