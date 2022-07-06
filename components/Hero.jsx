import React from "react";

const Hero = ({ heading, message, description }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute z-[2] font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center bottom-0 top-0 left-0 right-0 flex items-center justify-center flex-col">
        <p
          data-scroll
          data-scroll-delay="0.13"
          data-scroll-speed="3"
          className="font-medium text-3xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
        >
          {message}
        </p>
        <h2
          data-scroll
          data-scroll-delay="0.13"
          data-scroll-speed="2"
          className="mb-2 text-5xl xl:text-7xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
        >
          {heading}
        </h2>
        <p
          data-scroll
          data-scroll-delay="0.13"
          data-scroll-speed="1.5"
          className="font-medium text-3xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
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
        <source src="assets/background2.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
