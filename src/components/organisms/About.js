import { dataSite } from '@/data';

export default function AboutConsulting() {
  return (
    <section className='max-w-7xl mx-auto py-20 px-8 grid md:grid-cols-2 gap-12 items-center'>
      {/* Left Side - Image */}
      <img
        src={dataSite.services[0].image}
        alt='Agency Team Meeting'
        className='rounded-xl w-full object-cover'
      />

      {/* Right Side - Content */}
      <div>
        <h2 className='text-[#0a3b3b] text-3xl font-semibold mb-4'>
          About Our Consulting Services
        </h2>
        <p className='text-gray-700 mb-8'>
          Our consulting services are designed to help advertising agencies
          improve their strategy, creativity, and operational efficiency. From
          market positioning and client relationship management to team
          performance and campaign execution, we partner with you to elevate
          your agency&apos;s impact.
        </p>

        <div className='border-t border-gray-200 pt-6'>
          <p className='text-3xl font-bold text-[#0a3b3b]'>75%</p>
          <p className='text-gray-700 mb-6'>
            of agencies report improved client retention and higher ROI after
            optimizing their creative and operational strategies with us.
          </p>

          <p className='text-3xl font-bold text-[#0a3b3b]'>21%</p>
          <p className='text-gray-700'>
            average increase in team productivity and faster project turnaround
            times after implementing our process optimization methods.
          </p>
        </div>
      </div>
    </section>
  );
}
