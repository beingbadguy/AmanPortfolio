import { WiDirectionUpRight } from 'react-icons/wi';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div className='pl-12 pr-12 mb-10'>
      <div className='flex items-end gap-1'>
        <h1 className='font-bold text-[60px]'>
          Projects <span className='text-purple-500'>.</span>
        </h1>
      </div>
      <div className='flex justify-between gap-5 flex-col md:flex-row'>
        <div className='flex justify-start items-right  md:h-[60vh]  mt-10 '>
          <div className='rounded h-[350px] '>
            <div className=' bg-purple-100 rounded'>
              <a href='https://sassy-ecom.vercel.app/'>
                <img
                  src='/Sassy.png'
                  alt=''
                  className=' rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 '
                />
              </a>
            </div>
            <div className='flex gap-6 '>
              <h1 className='font-bold mt-6 text-xl'>Slayyyyyy</h1>
              <Link to='https://sassy-ecom.vercel.app/'>
                <WiDirectionUpRight className='mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500' />
              </Link>
            </div>
            <p className='mt-2'>E-commerce platform promoting eco-friendly products.</p>
          </div>
        </div>

        <div className='flex justify-start items-right  md:h-[60vh] mt-10 '>
          <div className='rounded h-[350px] '>
            <div className=' bg-purple-100 rounded'>
              <Link to='https://todo-by-react-beryl.vercel.app/'>
                <img
                  src='/todo_screen.png'
                  alt=''
                  className=' rounded-xl  p-2 h-[200px] md:h-[300px] cursor-pointer scale-95  hover:scale-90 transition-all relative z-0 '
                />
              </Link>
            </div>
            <div className='flex gap-6 '>
              <h1 className='font-bold mt-6 text-xl'>HeroTodo</h1>
              <Link to='https://todo-by-react-beryl.vercel.app/'>
                <WiDirectionUpRight className='mt-6 text-3xl p- border border-purple-500 cursor-pointer rounded-[50%] text-purple-500' />
              </Link>
            </div>
            <p className='mt-2'>
              "keeps your life in order. Manage tasks,  set priorities, <br /> and achieve
              more every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
