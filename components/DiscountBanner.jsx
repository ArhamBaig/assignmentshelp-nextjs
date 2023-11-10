import { bgburntpaper, logoportrait, logowhite } from "@/public";
import Image from "next/image";

const DiscountBanner = () => {
  return (
    <div className="lg:mx-auto lg:max-w-5xl xl:max-w-6xl -mt-28 relative mx-3 h-96 flex justify-center items-center">
      <Image
        src={bgburntpaper}
        alt="burnt paper background"
        fill={true}
        className="-z-10 opacity-80"
      />
      <div className="flex flex-col md:flex-row p-4 md:p-6 items-center justify-center">
        <div className="flex justify-center items-center">
          <Image src={logoportrait} alt="logo" className="w-40 md:w-64" />
        </div>
        <div className=" text-center flex flex-col max-w-xs md:max-w-lg mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-black">Dive into the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-purple-700 to-secondary">
          Ocean of Knowledge
          </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg my-4">
            Start Your Journey Today with Essay Writing UK. Get a{" "}
            <span className="text-primary font-bold">15% discount</span> on our
            Writing Services. Hurry up, you get the chance to avail this
            limited-time offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
