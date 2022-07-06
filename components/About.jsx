import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="fixed-target"
      className="relative flex min-h-screen w-[100vw] md:w-[90vw] lg:w-[80vw] m-auto"
    >
      <h1
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        className="absolute top-4 left-[5%] z-10 text-5xl xl:text-8xl drop-shadow-[0_5px_3px_rgba(0,0,0)]"
      >
        ABOUT.
      </h1>
      <div
        data-scroll-target="#fixed-target"
        data-scroll
        data-scroll-sticky
        className="w-1/2 text-[1rem] lg:text-xl relative z-10 lg:mt-[15%] mt-0 LeftDiv"
      >
        I specialize in building complex web applications,digital product design
        and developing visual design systems. I enjoy creating effortless user
        experience and designing delightful digital products.
        <br />
        <br />
        The entire process of going from a concept to release and gathering
        user’s feedback on either client’s or my own products is what makes me
        wake up everyday! I worked with numerous clients from all around the
        world from early startups to well-established companies.
        <br />
        <br />I always seek new opportunities for cooperation on projects around
        interesting dashboards, design systems or landing pages. Let’s create
        something awesome together!
      </div>
      <div className="w-1/2 relative RightDiv">
        <div>
          <Image
            src="/assets/face3.jpg"
            width="650px"
            height="867px"
            layout="fixed"
          />
        </div>
        <div className="absolute right-[95%] bottom-[10%] w-[40%] smallImg1">
          <Image
            data-scroll
            data-scroll-speed="1"
            src="/assets/face6.jpg"
            width="855px"
            height="1280px"
            layout="responsive"
          />
        </div>
        <div className="absolute left-[80%] bottom-[30%] w-[40%] smallImg2">
          <Image
            data-scroll
            data-scroll-speed="1"
            src="/assets/face1.jpg"
            width="750px"
            height="981px"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
