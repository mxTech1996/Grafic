import { FaBullseye, FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function ConsultingServices() {
  return (
    <section
      id='about'
      className='max-w-7xl mx-auto py-20 px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center'
    >
      {/* Service 1 */}
      <div>
        <FaBullseye className='text-[#0a3b3b] mx-auto text-5xl mb-6' />
        <h3 className='text-[#0a3b3b] text-xl font-semibold mb-4'>
          Strategic Brand Positioning
        </h3>
        <p className='text-gray-600 max-w-xs mx-auto'>
          Helping agencies define unique market positioning, sharpen messaging,
          and reach ideal clients effectively.
        </p>
      </div>

      {/* Service 2 */}
      <div>
        <FaLightbulb className='text-[#0a3b3b] mx-auto text-5xl mb-6' />
        <h3 className='text-[#0a3b3b] text-xl font-semibold mb-4'>
          Creative Process Optimization
        </h3>
        <p className='text-gray-600 max-w-xs mx-auto'>
          Improving team workflows, idea development, and execution to deliver
          better creative outcomes for clients.
        </p>
      </div>

      {/* Service 3 */}
      <div>
        <FaHandshake className='text-[#0a3b3b] mx-auto text-5xl mb-6' />
        <h3 className='text-[#0a3b3b] text-xl font-semibold mb-4'>
          Client Relationship Management
        </h3>
        <p className='text-gray-600 max-w-xs mx-auto'>
          Providing methodologies and tools to strengthen long-term client
          partnerships and boost client retention.
        </p>
      </div>
    </section>
  );
}
