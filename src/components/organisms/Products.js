import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

export default function Products() {
  const services = dataSite.products;
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <>
      {/* Our products title */}
      <section className='bg-[#0a3b3b] text-white py-16'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-4'>Our Products</h2>
          <p className='text-lg mb-8'>
            Explore our range of products designed to elevate your agency&apos;s
            performance and creativity.
          </p>
        </div>
      </section>

      <section
        id='products'
        className='bg-[#0a3b3b] px-8 py-16  grid grid-cols-3 gap-10 lg:flex-row lg:justify-center'
      >
        {services.map((service, idx) => {
          const isInCart = validateProductInCart(service.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(service.id);
          };
          return (
            <div
              key={idx}
              className='bg-[#0a3b3b] text-white max-w-md rounded-lg overflow-hidden'
            >
              <img
                src={service.image}
                alt={service.name}
                className='w-full h-64 object-cover rounded-t-lg'
              />
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{service.name}</h3>
                <p className='text-sm mb-4'>{service.description}</p>
                <p className='text-white flex items-center gap-1 border-b border-white hover:opacity-80'>
                  $ {service.price}
                </p>
                {/* button add to cart */}

                <button
                  onClick={handleClick}
                  className={`mt-4 px-4 py-2 rounded-lg text-white ${
                    isInCart
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
