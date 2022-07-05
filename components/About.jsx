import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="fixed-target"
      className="relative flex min-h-screen w-[80vw] m-auto "
    >
      <h1
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        className="absolute top-4 left-[5%] z-10 font-bold text-5xl xl:text-9xl "
      >
        About
      </h1>
      <div
        data-scroll-target="#fixed-target"
        data-scroll
        data-scroll-sticky
        className="w-1/2 text-xl relative z-10 mt-[15%]"
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
      <div className="w-1/2 relative">
        <div>
          <Image
            src="/assets/face3.jpg"
            width="650px"
            height="867px"
            layout="responsive"
          />
        </div>
        <div className="absolute right-[95%] bottom-[10%] w-[40%]">
          <Image
            data-scroll
            data-scroll-speed="5"
            src="/assets/face6.jpg"
            width="855px"
            height="1280px"
            layout="responsive"
          />
        </div>
        <div className="absolute left-[80%] bottom-[30%] w-[40%]">
          <Image
            data-scroll
            data-scroll-speed="-2"
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
