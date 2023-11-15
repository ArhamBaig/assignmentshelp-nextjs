"use client";
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
          <h2 className="text-4xl  text-center font-semibold">
            Dare to Be Epic with <strong className="bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent">Assignment Help UK</strong>
            <span className="text-secondary">!</span>
          </h2>
          <p className="text-justify ">
            Curious about how we turn the academic page? At AssignmentHelpUK,
            each assignment is a track carefully mixed with precision,
            creativity, and academic prowess. Let the beats of excellence drop
            &amp; explore what makes our <strong>assignment help UK</strong> the
            DJ of your success party!
          </p>
        </div>
        <div className="flex-col justify-center items-center mx-auto lg:pl-4 lg:pr-16 lg:col-span-2">
          <h3 className="text-gray-600  text-center pb-4">Our Reviews</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-y-6">
            <div className="flex justify-center items-center w-64">
              <Image
                src={trustpilotlogo}
                alt="trustpilot logo"
                width={50}
                height={50}
              />
              <div className="flex flex-col pl-2">
                <h3 className="text-2xl w-32 xl:w-max">Trustpilot</h3>
                <Rating value={5} name="read-only" readOnly />
              </div>
            </div>
            <div className="flex justify-center items-center w-64">
              <Image
                src={sitejabberlogo}
                alt="sitejabber logo"
                width={50}
                height={50}
              />
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
          image={qualityico}
          alt={"quality badge"}
          title={"Exquisite Quality"}
          desc={
            "Under the vigilant gaze of our quality guardians, each assignment emerges flawless. AssignmentHelpUK – Where words shimmer, grades gleam - your masterpiece unfolds with perfection & precision."
          }
        />
        <ValueCard
          image={supportico}
          alt={"support icon"}
          title={"Student-Writer Dialogue"}
          desc={
            "Here, we groove with Student-Writer Dialogue, turning assignments into academic jams. Your voice and our pen – a harmonious celebration of ideas!"
          }
        />
        <ValueCard
          image={clockico}
          alt={"clock icon"}
          title={"Time Pulse Wrap"}
          desc={
            "Tick-tock, triumph o'clock at AssignmentHelpUK! Wrapped in the rhythm of Time Pulse Wrap, deadlines bow to our punctuality. Here, time ticks in favor of your success."
          }
        />

        <ValueCard
          image={plagico}
          alt={"support icon"}
          title={"Smarty Saver Rates"}
          desc={
            "We believe that excellence shouldn't have to come with a hefty price tag. Our Smarty Saver Rates for UK assignment help, make excellence affordable, turning big dreams into achievable milestones."
          }
        />
        <ValueCard
          image={formatico}
          alt={"support icon"}
          title={"Revise & Rise"}
          desc={
            "Every revision, free and limitless, breathes new life into your assignment, ensuring it reaches its zenith of perfection. It's not just editing; it's a metamorphosis from revision to rise!"
          }
        />
        <ValueCard
          image={privacyico}
          alt={"privacy is ensured"}
          title={"Stealth Shield Protocol"}
          desc={
            "We're the guardians of your academic secrets! Our strict privacy policy is your VIP ticket to a highly confidential delegation of academic grades!"
          }
        />
      </div>
    </div>
  );
};

const ValueCard = ({ image, alt, title, desc }) => {
  return (
    <div className="flex p-3 bg-slate-200 rounded-lg group hover:bg-secondary transition-all duration-300 cursor-default">
      <div className="h-full rounded-full w-1 bg-secondary mr-4 group-hover:bg-white transtion-all duration-300"></div>
      <div className="flex flex-col max-w-md">
        <div className="flex justify-between">
          <Image src={image} alt={alt} className="w-14 h-14" />
          <h3 className="text-2xl text-center group-hover:text-white transtion-all duration-300 font-semibold">
            {title}
          </h3>
        </div>
        <p className="text-justify group-hover:text-white transtion-all duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ValueProposition;
