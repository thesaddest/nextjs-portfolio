import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("tranparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-30 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            AS
          </h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex relative"
        >
          <motion.li
            whileTap={{ scale: 0.9, Y: 0 }}
            className="text-xl p-4 uppercase font-bold"
          >
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9, Y: 0 }}
            className="text-xl p-4 uppercase font-bold"
          >
            <Link href="/#works">About</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9, Y: 0 }}
            className="text-xl p-4 uppercase font-bold"
          >
            <Link href="/#about">Works</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9, Y: 0 }}
            className="text-xl p-4 uppercase font-bold"
          >
            <Link href="/#contact">Contact</Link>
          </motion.li>
        </ul>

        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul className="relative">
            <motion.li
              whileTap={{ scale: 0.9, Y: 0 }}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.9, Y: 0 }}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/#works">About</Link>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.9, Y: 0 }}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/about">Works</Link>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.9, Y: 0 }}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/#contact">Contact</Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
