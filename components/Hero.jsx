import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]" />
      <div className="absolute z-[2] font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center bottom-0 top-0 left-0 right-0 flex items-center justify-center flex-col">
        <h2
          data-scroll
          data-scroll-delay="0.13"
          data-scroll-speed="3"
          className="mb-6 text-4xl xl:text-5xl font-['Playfair_Display']"
        >
          {heading}
        </h2>
        <p className="font-[600] text-xl">{message}</p>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="assets/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
