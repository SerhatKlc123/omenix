import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';

const LeftBase = (props) => {
    return(
        <div className='lg:flex lg:px-32 px-10 w-full h-auto lg:py-24 py-16'>
             <Image 
        src={props.src}
        alt='intro.png'
        className='lg:w-1/2 w-auto h-auto lg:pb-0 pb-10 lg:hidden'
        />
        <div className='px-0 lg:px-10'></div>
        <div className='block'> 
            <p className='text-sm pb-2'>{props.q}</p>
            <p className='text-2xl text-[#053B50] font-bold pb-5'>{props.title}</p>
            <p>{props.subtitle}</p>
            <p className='pt-5 flex justify-start items-center font-bold text-sm text-[#333333] hover:text-[#64CCC5]'>Daha fazla öğren 
            <span className='pl-2'>
                <FaAngleRight />
            </span>
            </p>
        </div>
        <Image 
        src={props.src}
        alt='intro.png'
        className='lg:w-1/2 w-auto h-auto lg:pb-0 pb-10 hidden lg:block'
        />
    </div>
    )
}

export default LeftBase