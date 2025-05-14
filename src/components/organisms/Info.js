import { dataSite } from '@/data';
import { useState, useEffect } from 'react';

const items = dataSite.services;

export default function Info() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const interval = setInterval(next, 5000); // Auto change every 5s
    return () => clearInterval(interval);
  }, []);

  const { title, description, image } = items[index];

  return (
    <section
      id='services'
      className='bg-[#f0fdf4] px-8 py-16 flex flex-col lg:flex-row items-center justify-center gap-8'
    >
      <div className='max-w-md text-center lg:text-left'>
        <h2 className='text-3xl font-bold text-[#0a3b3b] mb-4'>{title}</h2>
        <p className='text-[#0a3b3b]'>{description}</p>
        <div className='flex mt-6 gap-4 justify-center lg:justify-start'>
          <button
            onClick={prev}
            className='border border-[#0a3b3b] rounded-full w-10 h-10 flex items-center justify-center'
          >
            &lt;
          </button>
          <button
            onClick={next}
            className='border border-[#0a3b3b] rounded-full w-10 h-10 flex items-center justify-center'
          >
            &gt;
          </button>
        </div>
      </div>

      <div className='max-w-sm rounded-lg overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='rounded-lg object-cover w-full'
        />
      </div>
    </section>
  );
}
