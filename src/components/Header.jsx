import { GrContactInfo } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import { useContext, useEffect, useState } from 'react';
import { ColorContext } from '../context/ColorContext';
import { NavLink } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg';
const Header = ({ value }) => {
  const mode = useContext(ColorContext);
  const [menu, setmenu] = useState(false);
  let scroller = Math.floor(value / 13.81) + '%;';
  useEffect(() => {
    localStorage.setItem('colorMode', JSON.stringify(mode.clr));
  }, [mode.clr]);
  return (
    <div
      className={` ${
        mode.clr ? 'bg-white' : 'bg-black'
      } flex justify-between font-bold items-center pl-8 py-6 pr-8 md:pl-14 md:pr-14 fixed w-[100%] ${
        scroller ? 'border-t-6 border-purple-100' : ''
      } `}
    >
      <div
        className={` absolute h-1 w-[${scroller}] bg-purple-500 top-[0%] left-0 transition-all`}
      ></div>
      <div className='flex '>
        <img
          src={`${
            mode.clr ? '/image__2_-removebg-preview.png' : '/Aman_logo-removebg-preview.png'
          }`}
          className='h-10 '
        />
      </div>
      <div
        className={`  pt-20 md:pt-0 absolute md:static ${
          mode.clr ? 'bg-white' : 'bg-black'
        }   w-[100%] md:w-auto h-[100vh] md:h-auto top-0  left-0 ${
          menu ? 'translate-y-20 transition-all' : 'translate-y-[-100%] transition-all'
        } `}
      >
        <ul className=' p-0 justify-center  md:m-[-10px]  items-center flex flex-col md:flex-row md:justify-between gap-20 md:gap-16 text-2xl md:text-sm md:static md:flex'>
          <NavLink to='/' className='hover:text-purple-500 transition-all cursor-pointer'>
            Home
          </NavLink>
          <NavLink to='/projects' className='hover:text-purple-500 transition-all cursor-pointer'>
            Project
          </NavLink>
          <NavLink to='/about' className='hover:text-purple-500 transition-all cursor-pointer'>
            About
          </NavLink>
          <NavLink
            to='https://drive.google.com/file/d/1f5haEPgDl2by-nBYvpseW_nViZ3W5-rX/view?usp=sharing'
            target='_blank'
            className='hover:text-purple-500 transition-all cursor-pointer'
          >
            Resume
          </NavLink>
        </ul>
      </div>
      <div
        onClick={() => {
          setmenu(!menu);
        }}
        className={` block md:hidden border-[1.5px] rounded-[50%] p-2 ${
          mode.clr ? 'border-black text-black' : 'border-white text-white'
        }  hover:border-purple-500 hover:text-purple-500 transition-all  cursor-pointer `}
      >
        {menu ? (
          <AiOutlineClose className='z-999 text-2xl ' />
        ) : (
          <CgMenuRight className='z-999 text-2xl ' />
        )}
      </div>
      <div className='absolute right-10 md:right-16 top-20 flex flex-col items-center mt-[-14px] fixed'>
        <div className={`h-10 ${mode.clr ? 'bg-black' : 'bg-white'} w-[2px]`}></div>
        {mode.clr ? (
          <div
            onClick={() => {
              mode.setclr(false);
            }}
          >
            <CiDark className=' text-2xl cursor-pointer mt-[-5px] ml-[4px]' />
          </div>
        ) : (
          <div
            onClick={() => {
              mode.setclr(true);
            }}
          >
            <CiLight className=' text-2xl cursor-pointer' />
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
