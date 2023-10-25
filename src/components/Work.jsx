import Image from 'next/image';

const Work = (props) => {
    return (
        <div>
            <Image
                src={props.src}
                alt='mock-how.png'
                className='pb-8'
            />
            <p className='text-lg text-white pb-2'>
                {props.title}
            </p>
            <p className='text-gray-200 font-normal text-sm pr-2 pb-5'>
                {props.subtitle}
            </p>
        </div>
    )
}

export default Work