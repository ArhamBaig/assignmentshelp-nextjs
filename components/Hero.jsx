"use client";
import Lottie from "lottie-react";
import animationData from "@/public/lottieFiles/hero-lottie.json";
import { bgheroimage, heroimage } from "@/public";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-primary  to-purple-900 flex justify-center lg:justify-between items-center px-2 sm:px-10 md:px-14 lg:px-24 relative">
      <Image
        src={bgheroimage}
        alt="hero background image"
        fill={true}
        className="object-cover opacity-20 z-0 from"
      />

      <div className=" w-72 sm:w-[400px] md:w-[600px] lg:w-[750px]  pt-32 pb-16 flex flex-col  justify-center items-center text-center lg:items-start lg:text-left z-10">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-10 font-bold relative mt-24 uppercase">
          Hassle-Free Academic{" "}
          <Lottie
            animationData={animationData}
            className=" h-[220px] w-[220px] absolute -top-44 left-[15%] sm:left-[33%] lg:-left-12"
            loop={true}
          />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-secondary">
            Writing Services
          </span>{" "}
          at Assignment Help UK!
        </h1>
        <p className="text-slate-300 mb-10 text-lg">
          description Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Non voluptates qui eaque magni sint odit quod ut inventore. Aperiam,
          enim. Corrupti recusandae laboriosam natus nostrum, eveniet eos saepe
          debitis dolore?
        </p>
        <button className="bg-secondary p-2 px-4 text-white text-xl rounded-full max-w-fit hover:bg-pink-800 transition-all duration-300">
          CTA BUTTON
        </button>
      </div>

      <Image
        src={heroimage}
        alt="hero background image"
        className=" pt-0 lg:pt-20 pb-16 lg:block hidden z-10 opacity-75"
        height={600}
        width={600}
      />
    </div>
  );
};

export default Hero;
