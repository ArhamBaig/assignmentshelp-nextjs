"use client"
import Lottie from "lottie-react";
import animationData from "@/public/lottieFiles/hero-lottie.json";
import { heroimage } from "@/public";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="bg-primary relative">
    <Image src={heroimage} alt="hero background image" layout="fill" className="opacity-20 object-cover" />
      <div className="flex justify-between px-28  z-10 opacity-90">
        <div className="max-w-4xl pt-28 flex flex-col  justify-center">
          <h1 className="text-white text-6xl mb-10 font-bold">ASSIGNMENTS HELP HEADING HEADIN HEADING HEADIN HEADIN</h1>
          <p className="text-slate-300 mb-10 text-xl">description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non voluptates qui eaque magni sint odit quod ut inventore. Aperiam, enim. Corrupti recusandae laboriosam natus nostrum, eveniet eos saepe debitis dolore?</p>
          <button className="bg-secondary p-2 px-4 text-white text-xl rounded-full max-w-fit hover:bg-pink-800 transition-all duration-300">CTA BUTTON</button>        
        </div>
      <Lottie
        animationData={animationData}
        className=" h-[750px] w-[750px] "
        loop={true}
      />
      </div>
    </div>
  );
};

export default Hero;
