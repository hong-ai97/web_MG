import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DirectProducts from './components/DirectProducts';
import RecommendedInsurance from './components/RecommendedInsurance';
import CategoryGrid from './components/CategoryGrid';
import BannerSection from './components/BannerSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F0F3F8]">
      <Header />
      <main className="flex-1 pb-24 pt-8 space-y-24">
        <HeroSection />
        <DirectProducts />
        <RecommendedInsurance />
        <CategoryGrid />
        <BannerSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;