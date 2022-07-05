import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import img1 from "../public/assets/1.png";
import img2 from "../public/assets/2.png";
import img3 from "../public/assets/3.png";
import img4 from "../public/assets/4.png";
import img5 from "../public/assets/5.png";
import img6 from "../public/assets/6.png";
import img7 from "../public/assets/7.png";
import img8 from "../public/assets/8.png";
import img9 from "../public/assets/9.png";
import img10 from "../public/assets/10.png";
import img11 from "../public/assets/11.png";
import img12 from "../public/assets/12.png";
import { motion } from "framer-motion";

const Work = ({ img, title }) => {
  return (
    <motion.div
      className="inline-block w-[50rem] mr-24"
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <Image
        src={img}
        alt={title}
        width="110%"
        height="65%"
        className="cursor-pointer"
        layout="responsive"
      ></Image>
      <h1 className="text-3xl font-bold text-center cursor-pointer pt-4 inline-block">
        {title}
      </h1>
    </motion.div>
  );
};

const WorksPreview = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
          markers: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          markers: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-screen h-auto w-screen m-auto overflow-hidden flex justify-start items-start relative"
    >
      <h1
        data-scroll
        data-scroll-speed="-1"
        className="absolute top-4 left-[5%] z-20 text-8xl text-white drop-shadow-[0_5px_3px_rgba(0,0,0)]"
      >
        Prev. Works
      </h1>
      <div className="w-[35%] min-h-screen z-10 bg-black text-white fixed left-0 flex justify-center items-center">
        <p className="w-[80%] font-normal m-auto text-xl">
          I’ve always been passionate about pixels and design projects and
          haven’t stopped working and learning about new technologies . Other
          than sitting in from of my display I enjoy myself in casual sports,
          such as bowling or playing football with friends.
          <br />
          <br />
          I'm grateful that my job allows me to work from anywhere. I’m active
          on Instagram where I share most of the and all info about my upcoming
          projects.
        </p>
      </div>
      <div
        ref={horizontalRef}
        className="absolute left-[35%] min-h-screen flex justify-start items-center pl-[30%]"
      >
        <Work img={img1} title="Custom Keyboards Shop" />
        <Work img={img2} title="Custom Keyboards Shop" />
        <Work img={img3} title="Custom Keyboards Shop" />
        <Work img={img4} title="Custom Keyboards Shop" />
        <Work img={img5} title="Shooes&Boots" />
        <Work img={img6} title="Shooes&Boots" />
        <Work img={img7} title="Shooes&Boots" />
        <Work img={img8} title="Shooes&Boots" />
        <Work img={img9} title="Trip Assistant" />
        <Work img={img10} title="Trip Assistant" />
        <Work img={img11} title="Trip Assistant" />
        <Work img={img12} title="Trip Assistant" />
      </div>
    </div>
  );
};

export default WorksPreview;
