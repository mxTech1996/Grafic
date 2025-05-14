import { dataSite } from '@/data';
import { useState } from 'react';

const testimonials = dataSite.references;

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const handleNext = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const { name, description, image } = testimonials[index];

  return (
    <div
      id='testimonials'
      className='bg-[#f0fdf4] p-8 rounded-lg px-48 mx-auto flex flex-col md:flex-row items-center justify-between'
    >
      <div className='flex items-center mb-4 md:mb-0'>
        {image ? (
          <img src={image} alt={name} className='w-16 h-16 rounded-full mr-4' />
        ) : (
          <div className='w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center mr-4'>
            {getInitials(name)}
          </div>
        )}
        <div>
          <h3 className='text-lg font-semibold'>{name}</h3>
          <p className='text-gray-600'>Client</p>
        </div>
      </div>

      <div className='max-w-xl text-gray-800'>{description}</div>

      <div className='flex mt-4 md:mt-0'>
        <button onClick={handlePrev} className='px-3 py-1 mx-1 border rounded'>
          ←
        </button>
        <button onClick={handleNext} className='px-3 py-1 mx-1 border rounded'>
          →
        </button>
      </div>
    </div>
  );
}
