import { FaBullseye, FaUsers, FaRocket } from 'react-icons/fa';

export default function Agency() {
  return (
    <section className='max-w-7xl mx-auto px-8 py-20'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-3xl text-[#0a3b3b] font-semibold'>
          Specialized Consulting Services For Agencies
        </h2>
        {/* <button className='bg-[#0a3b3b] text-white px-5 py-2 rounded-lg'>
          View All Services
        </button> */}
      </div>

      <div className='space-y-8'>
        {/* Service 1 - Highlighted */}
        <div className='flex items-center p-6 bg-[#f0fdf4] rounded-lg'>
          <FaBullseye size={32} className='text-[#0a3b3b] mr-6' />
          <div>
            <h3 className='text-xl font-semibold text-[#0a3b3b]'>
              Market Positioning Strategy
            </h3>
            <p className='text-gray-700'>
              Helping your agency define and communicate its unique value
              proposition to attract and retain high-value clients.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className='flex items-center p-6 bg-[#f0fdf4] rounded-lg'>
          <FaUsers size={32} className='text-[#0a3b3b] mr-6' />
          <div>
            <h3 className='text-xl font-semibold text-[#0a3b3b]'>
              Client Relationship Optimization
            </h3>
            <p className='text-gray-700'>
              Strengthen client retention through process improvements, clearer
              communication, and service delivery enhancements.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className='flex items-center p-6 bg-[#f0fdf4] rounded-lg'>
          <FaRocket size={32} className='text-[#0a3b3b] mr-6' />
          <div>
            <h3 className='text-xl font-semibold text-[#0a3b3b]'>
              Creative & Operational Performance
            </h3>
            <p className='text-gray-700'>
              Boost your agency’s creative output and executional efficiency to
              scale results and maximize client impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
