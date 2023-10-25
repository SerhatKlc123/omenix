import Lottie from 'lottie-react';


const Check = (props) => {
    return(
        <div className='flex justify-center items-center'>
                <Lottie
                    animationData={props.animation} loop={true}
                    className='w-7 h-auto'
                />
                <p className={props.color ? 'pl-1 text-slate-700' : 'pl-1 text-white'}>
                {props.title}
                </p>
                </div>
    )
}
export default Check