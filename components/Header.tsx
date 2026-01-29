
import React, { useState, useEffect } from 'react';
import { Menu, Search, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeToggle, setActiveToggle] = useState<'direct' | 'mutual'>('direct');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-hidden ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100 bg-transparent'
      }`}>
      <div className="max-w-[1600px] mx-auto px-4 h-[88px] pt-4 flex items-center justify-between">

        {/* Left: Logo & Pill Toggle */}
        <div className="flex items-center gap-8">
          <div className="cursor-pointer">
            <img src="/assets/images/logo_mg_new.png" alt="MG Logo" className="h-6 object-contain" />
          </div>

          {/* Pill Toggle (Samsung Fund Style) */}
          <div className="hidden lg:flex items-center bg-[#F1F3F5] rounded-full p-1 h-9">
            <button
              onClick={() => setActiveToggle('direct')}
              className={`px-5 h-full rounded-full text-[13px] font-bold transition-all ${activeToggle === 'direct'
                ? 'bg-[#174291] text-white shadow-md'
                : 'text-[#666] hover:text-[#111]'
                }`}
            >
              MG다이렉트
            </button>
            <button
              onClick={() => setActiveToggle('mutual')}
              className={`px-5 h-full rounded-full text-[13px] font-bold transition-all ${activeToggle === 'mutual'
                ? 'bg-[#174291] text-white shadow-md'
                : 'text-[#666] hover:text-[#111]'
                }`}
            >
              MG공제
            </button>
          </div>
        </div>

        {/* Center: Navigation Menus */}
        <nav className="hidden lg:flex items-center gap-10">
          {['상품소개', '상담/가입', '계약관리', '보상서비스', '고객센터'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[16px] font-bold text-[#111] hover:text-[#174291] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Utility Icons (User, Search, Menu) */}
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <User className="w-[22px] h-[22px] text-[#111]" />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search className="w-[22px] h-[22px] text-[#111]" />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu className="w-[22px] h-[22px] text-[#111]" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;