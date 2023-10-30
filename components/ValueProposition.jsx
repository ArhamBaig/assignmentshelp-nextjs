"use client"
import {
  supportico,
  clockico,
  formatico,
  plagico,
  privacyico,
  qualityico,
  trustpilotlogo,
  sitejabberlogo,
  gmblogo,
} from "@/public";
import { Rating } from "@mui/material";
import Image from "next/image";

const ValueProposition = () => {
  return (
    <div className="my-20  flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3  max-w-[1600px] mb-10 ">
        <div className="flex flex-col gap-5 border-b-[1px] lg:border-r-[1px] lg:border-b-0 border-secondary mx-5 lg:ml-12 pl-4 lg:mr-16 pr-4 pb-4 mb-4 col-span-1">
          <h2 className="text-4xl  text-center font-semibold">Why Us<span className="text-secondary">?</span></h2>
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et,
            vel quis debitis quas atque fugiat eveniet! Blanditiis autem
            praesentium quasi, dicta nam sed esse dolores error nostrum ad
            facilis.
          </p>
        </div>
        <div className="flex-col justify-center items-center mx-auto lg:pl-4 lg:pr-16 lg:col-span-2">
          <h3 className="text-gray-600  text-center pb-4">Our Reviews</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-y-6">
            <div className="flex justify-center items-center w-64">
              <Image src={trustpilotlogo} alt="trustpilot logo" width={50} height={50} />
              <div className="flex flex-col pl-2">
              <h3 className="text-2xl w-32 xl:w-max">Trustpilot</h3>
              <Rating value={5} name="read-only" readOnly />
              </div>
            </div>
            <div className="flex justify-center items-center w-64">
              <Image src={sitejabberlogo} alt="sitejabber logo" width={50} height={50} />
              <div className="flex flex-col pl-2">
              <h3 className="text-2xl w-32 xl:w-max">Sitejabber</h3>
              <Rating value={5} name="read-only" readOnly />
              </div>
            </div>
            <div className="flex justify-center items-center w-64">
              <Image src={gmblogo} alt="gmb logo" width={50} height={50} />
              <div className="flex flex-col pl-2">
              <h3 className="text-2xl w-32 xl:w-max">Google My Business</h3>
              <Rating value={5} name="read-only" readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-3 max-w-[1600px]">
          <ValueCard
          image={privacyico}
          alt={"support icon"}
            title={"some title"}
            desc={
              "itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."
            }
          />
          <ValueCard
          image={clockico}
          alt={"support icon"}
            title={"some title"}
            desc={
              "itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."
            }
          />
          <ValueCard
          image={supportico}
          alt={"support icon"}
            title={"some title"}
            desc={
              "itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."
            }
          />
     
          <ValueCard
          image={plagico}
          alt={"support icon"}
            title={"some title"}
            desc={
              "itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."
            }
          />
          <ValueCard
          image={formatico}
          alt={"support icon"}
            title={"some title"}
            desc={
              "itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."
            }
          />
          <ValueCard
          image={qualityico}
          alt={"support icon"}
            title={"some title"}
            desc={
              "itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."
            }
          />
      </div>
    </div>
  );
};

const ValueCard = ({image,alt, title, desc }) => {
  return (
    <div className="flex p-3 bg-slate-200 rounded-lg group hover:bg-secondary transition-all duration-300 cursor-default">
    <div className="h-full rounded-full w-1 bg-secondary mr-4 group-hover:bg-white transtion-all duration-300">

    </div>
    <div className="flex flex-col max-w-md">
      <div className="flex justify-between">
        <Image src={image} alt={alt} className="w-14 h-14" />
      <h3 className="text-2xl text-center group-hover:text-white transtion-all duration-300">{title}</h3>
      </div>
      <p className="text-justify group-hover:text-white transtion-all duration-300">{desc}</p>
    </div>
    </div>
  );
};

export default ValueProposition;
