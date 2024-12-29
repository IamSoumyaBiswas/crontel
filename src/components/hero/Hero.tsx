"use client";

import Image from "next/image";
import React from "react";
import heroImage from "../../assets/images/heroimage.png";
import comic from "../../assets/images/comic.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Background Image with Animation */}
      <motion.div
        className="absolute inset-0 -z-10 flex justify-center items-center"
        initial={{ opacity: 0.5, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <Image
          src={heroImage}
          alt="Hero Background"
          height={400}
          width={500}
          objectFit="cover"
          className="opacity-80"
        />
      </motion.div>


      {/* <div className="round-background"></div> */}

      {/* Hero Content */}
      <div className="text-center max-w-screen-xl flex flex-col  justify-between items-center z-10">
        {/* <Image src={comic} alt="left" height={200} width={200} className="top-0" /> */}
        <h1 className="text-6xl font-medium text-center">
          The Best Source for IT Solution
        </h1>
        <p className="text-xl  text-gray-500 mt-8 max-w-screen-md">
          Web Designing in a powerful way of not just professions but also a
          passion for our company. We tend to believe that a smart-looking
          website is the first impression on visitors.
        </p>

        {/* Discover More Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05 }}
          className="mt-10 p-4 bg-primary text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Discover More
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
