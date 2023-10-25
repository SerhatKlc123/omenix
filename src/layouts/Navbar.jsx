"use client";
import { useState, useEffect } from 'react'
import Logo from '../images/logo.png'
import WLogo from '../images/white.png'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';
import NavbarElement from '@/components/NavbarElement';
import { FaGlobeEurope } from 'react-icons/fa';



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  const [openProduct, setOpenProduct] = useState(false);

  const openProductHandle = () => {
    setOpenProduct(!openProduct);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <div className=
        {isScrolled ? "fixed px-10 md:px-14 lg:px-28 w-full h-[70px] flex bg-white justify-between items-center z-50 border-b-2 border-x-gray-100" : "fixed px-10 md:px-14 lg:px-28 w-full h-[70px] flex justify-between items-center z-50"}>
        <Image src={isScrolled ? Logo : WLogo} alt='logo.png' className='h-10 w-auto' />

        {/*Web menu */}
        <ul className='hidden md:flex md:items-center'>
          <NavbarElement link='products' title='Ürünler' func={openProductHandle} scroll={isScrolled} />
          <NavbarElement link='device' title='Cihaz Durumu Takibi' func={openProductHandle} scroll={isScrolled} />
          <button className='text-white hover:bg-[#64CCC5] shadow-sm bg-[#053B50] p-1 px-3 font-normal rounded-full mr-5'>Demo Talep</button>
          <FaGlobeEurope className={
            isScrolled ? 'text-xl text-[#053B50] hover:text-[#64CCC5]' : 'text-xl text-white hover:text-[#64CCC5]'
          } />
        </ul>


        {/* Mobile Button */}
        <div onClick={handleNav} className='md:hidden z-10 text-white'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#053B50] text-white flex flex-col justify-center items-center text-xl'
          }
        >
          <li className='py-6  hover:text-green-500'>
            <Link onClick={handleNav} to='home' smooth={true} duration={500}>
              Ürünler
            </Link>
          </li>
          <li className='py-6  hover:text-green-500'>
            {' '}
            <Link onClick={handleNav} to='about' smooth={true} duration={500}>
              Sektörler
            </Link>
          </li>
          <li className='py-6 hover:text-green-500'>
            {' '}
            <Link onClick={handleNav} to='skills' smooth={true} duration={500}>
              Cihaz Durumu Takibi
            </Link>
          </li>
          <button className='text-white bg-[#64CCC5] shadow-sm  p-1 px-5 font-normal text-lg rounded-full mr-5 mt-5'>Demo Talep</button>

        </ul>
      </div>



    </>

  )
}

export default Navbar