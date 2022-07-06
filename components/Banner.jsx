import React from "react";

const Banner = () => {
  return (
    <div className="relative min-h-screen w-[90vw] lg:w-[80vw] m-auto flex justify-center items-center">
      <div
        id="up"
        className="min-h-screen flex flex-col lg:justify-evenly justify-center items-center"
      >
        <h1 className="whitespace-nowrap uppercase text-white leading-none text-xl md:text-5xl lg:text-7xl">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="8"
            className="block py-4 px-8 bg-black"
          >
            HTML / CSS / JAVASCRIPT{" "}
          </span>
        </h1>
        <h1 className="whitespace-nowrap uppercase text-white leading-none text-xl md:text-5xl lg:text-7xl">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="-6"
            className="block py-4 px-8 bg-black"
          >
            TYPESCRIPT / REACT / NEXT.JS
          </span>
        </h1>
        <h1 className="whitespace-nowrap uppercase text-white leading-none text-xl md:text-5xl lg:text-7xl">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="6"
            className="block py-4 px-8 bg-black"
          >
            REDUX / MOBX / REST API{" "}
          </span>
        </h1>
        <h1 className="whitespace-nowrap uppercase text-white leading-none text-xl md:text-5xl lg:text-7xl">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="-4"
            className="block py-4 px-8 bg-black"
          >
            NODE.JS / EXPRESS / NEST.JS{" "}
          </span>
        </h1>
        <h1 className="whitespace-nowrap uppercase text-white leading-none text-xl md:text-5xl lg:text-7xl">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="8"
            className="block py-4 px-8 bg-black"
          >
            POSTGRESQL / MONGODB{" "}
          </span>
        </h1>
        <h1 className="whitespace-nowrap uppercase text-white leading-none text-xl md:text-5xl lg:text-7xl">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
            data-scroll-speed="-6"
            className="block py-4 px-8 bg-black"
          >
            MUI / TAILWIND / BOOTSTRAP{" "}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
