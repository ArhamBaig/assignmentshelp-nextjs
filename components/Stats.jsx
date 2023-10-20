"use client";
import CountUp from "react-countup";
import Image from "next/image";
import { statsbgimage, statsimage } from "@/public";

const Stats = () => {
  return (
    <div className="relative bg-primary pt-4 lg:pt-20 pb-20">
    <Image src={statsbgimage} alt="hero background image" layout="fill" className="z-0 opacity-20 object-cover" />

      <div className="container mx-auto lg:flex-row flex-col justify-center items-center py-4 lg:py-10">
      <h2 className="text-center lg:text-left text-gray-300 capitalize  pb-4">
          Let the Numbers talk.{" "}
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center">
  
          <div className="grid grid-cols-2 items-center justify-center h-fit xl:w-[750px]">
            <StatCounter name={"rating"} value={4.8} decimal={"."} decimalValue={1} suffix={"/5"}/>
            <StatCounter name={"assignment"} value={43} suffix={"K+"} />
            <StatCounter name={"client"} value={9} suffix={"K+"} />
            <StatCounter name={"Writing Services"} value={40} suffix={"+"} />
            <StatCounter name={"Writing Services"} value={40} suffix={"+"} />
          </div>
          <div className="px-24">
            <Image src={statsimage} alt="statstics image" width={750} height={500} className=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCounter = ({
  name,

  value,
  decimal,
  decimalValue,
  suffix,
}) => {
  return (
    <div className="flex items-center p-2 sm:p-3 md:p-6 text-white">
      <div className="w-36 sm:w-56 md:w-72 lg:w-96 grid grid-cols-2 justify-center items-center pl-0 lg:pl-2 gap-0 lg:gap-10 xl:gap-2 ">
        <CountUp
          className="text-xl sm:text-4xl md:text-5xl "
          end={value}
          decimal={decimal}
          decimals={decimalValue}
          suffix={suffix}
          delay={0.75}
          duration={5}
          enableScrollSpy
          scrollSpyOnce
          
        />
        <div>
          <p className="text-xs md:text-lg capitalize mt-2">{name}</p>
          <div className=" w-16 h-[1px] bg-secondary rounded-full my-2"></div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Stats;