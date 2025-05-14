'use client';
import { useCart } from 'ecommerce-mxtech';
import { useState, useEffect } from 'react';
// import cart from icons
import { AiOutlineShoppingCart } from 'react-icons/ai';
export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { products } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#edf6f1]' : 'bg-white'
      }`}
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3'>
        <div className='flex items-center space-x-2'>
          <span className='text-xl font-bold'>Psychologist</span>
        </div>
        <ul className='hidden md:flex space-x-6 text-[#0a3b3b] font-semibold'>
          <a href='/'>Home</a>
          <a href='/#about'>About Us</a>
          <a href='/#services'>Services</a>
          <a href='/#products'>Products</a>
          <a href='/#testimonials'>Testimonials</a>
        </ul>
        <div className='flex items-center space-x-4'>
          <button
            onClick={() => (window.location.href = '/more-information')}
            className='border border-[#0a3b3b] text-[#0a3b3b] px-4 py-1 rounded-md'
          >
            Contact Us
          </button>
          {/* cart button  */}

          <button
            onClick={() => (window.location.href = '/my-cart')}
            className='relative'
          >
            <AiOutlineShoppingCart className='text-[#0a3b3b] text-2xl' />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1'>
              {products.length}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
