'use client';

import AboutConsulting from '@/components/organisms/About';
import Agency from '@/components/organisms/Agency';
import ConsultingServices from '@/components/organisms/Consulting';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import Info from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import TestimonialsCarousel from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ConsultingServices />
      <AboutConsulting />
      <Products />
      <Agency />
      <Info />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
