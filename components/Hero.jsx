import React from "react";

const Hero = ({ heading, description }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute z-[2] font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0)] text-center bottom-0 top-0 left-0 right-0 flex items-center justify-center flex-col">
        <h2
          data-scroll
          data-scroll-delay="0.13"
          data-scroll-speed="2"
          className="font-normal mb-2 text-5xl xl:text-7xl drop-shadow-[0_5px_3px_rgba(0,0,0)]"
        >
          {heading}
        </h2>
        <p
          data-scroll
          data-scroll-delay="0.13"
          data-scroll-speed="1.5"
          className="font-normal text-2xl drop-shadow-[0_5px_3px_rgba(0,0,0)]"
        >
          {description}
        </p>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="assets/background3.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
