import { dataSite } from '@/data';

export default function HeroSection() {
  return (
    <section className='bg-[#0a3b3b] mt-28 rounded-3xl max-w-7xl mx-auto px-8 py-16 flex flex-col lg:flex-row items-center gap-12'>
      {/* Left Side - Text */}
      <div className='flex-1 text-white'>
        <h1 className='text-4xl md:text-5xl font-semibold mb-6'>
          {dataSite.subtitle}
        </h1>
        <p className='text-lg mb-8'>{dataSite.description}</p>
        <div className='flex items-center gap-6'>
          <button className='bg-white text-[#0a3b3b] px-6 py-2 rounded-md font-semibold'>
            Get Start
          </button>
          <button className='text-white font-semibold flex items-center gap-2'>
            About Us <span>→</span>
          </button>
        </div>
      </div>

      {/* Right Side - Image Grid */}
      <div className='flex-1 grid grid-cols-2 gap-4'>
        <img
          src={dataSite.image_hero}
          alt='Session 1'
          className='rounded-xl h-48 object-cover w-full'
        />
        <img
          src={dataSite.image_hero2}
          alt='Session 2'
          className='rounded-xl h-48 object-cover w-full'
        />
        <img
          src={dataSite.services[0].image}
          alt='Session 3'
          className='rounded-xl h-48 object-cover w-full col-span-2'
        />
      </div>
    </section>
  );
}
