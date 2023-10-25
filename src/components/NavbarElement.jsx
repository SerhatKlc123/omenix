"use client";
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavbarElement = (props) => {
  const [open, setOpen] = useState(false)
  const handleState = () => {
    setOpen(!open)
    props.func()
    
    
  }
  
  return(
        <li className=
        {
          !props.scroll ? 'font-normal pr-6 hover:text-[#64CCC5] text-white' : 'font-normal pr-6 hover:text-[#64CCC5] text-[#053B50]'
        }
         onMouseEnter={handleState} onMouseLeave={handleState}>
          <Link to={props.link} smooth={true} duration={500} className='flex items-center'>
           {props.title}
           <span className='pl-1'>
            {open ? <FaAngleDown /> : <FaAngleUp /> }
           </span>
          </Link>
        </li>
    )
}

export default NavbarElement