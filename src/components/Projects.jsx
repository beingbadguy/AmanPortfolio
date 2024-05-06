import { WiDirectionUpRight } from 'react-icons/wi';
const Projects = () => {
  return (
    <div className='pl-12 pr-12 mb-10'>
      <div className='flex items-end gap-1'>
        <h1 className='font-bold text-[60px]'>
          Projects <span className='text-purple-500'>.</span>
        </h1>
      </div>
      <div className='flex justify-start items-right  h-[80vh] mt-10 '>
        <div className='rounded h-[350px] '>
          <div className=' bg-purple-100 rounded'>
            <a href='https://sassy-ecom.vercel.app/'>
              <img
                src='/Sassy.png'
                alt=''
                className=' rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all'
              />
            </a>
          </div>
          <div className='flex gap-6 '>
            <h1 className='font-bold mt-6 text-xl'>Slayyyyyy</h1>
            <a href='https://sassy-ecom.vercel.app/'>
              <WiDirectionUpRight className='mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500' />
            </a>
          </div>
          <p className='mt-2'>
            E-commerce platform promoting eco-friendly products.
            {/* with  payment integration. */}
          </p>
        </div>
        {/* <h1>All the projects will be listed here...</h1> */}
      </div>
    </div>
  );
};
export default Projects;
