import React from 'react';

const Hero = ({heading, message}) => {
    return (
        <div className='flex items-center justify-center h-screen mb-[10rem]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]' />
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src='assets/background.mp4' type='video/mp4'/>
            </video>
            <div className='p-12 z-[2] font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
                <h2 className='mb-6 text-4xl xl:text-5xl'>{heading}</h2>
                <p className='font-normal text-xl'>{message}</p>
            </div>
        </div>
    );
};

export default Hero;