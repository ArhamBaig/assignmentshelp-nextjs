import { bgburntpaper, logoblackportrait } from "@/public";
import Image from "next/image";

const DiscountBanner = () => {
  return (
    <div className="lg:mx-auto lg:max-w-5xl xl:max-w-6xl -mt-28 relative mx-3  flex justify-center items-center ">
      <Image
        src={bgburntpaper}
        alt="burnt paper background"
        fill={true}
        className="-z-10 opacity-90"
      />
      <div className="flex flex-col md:flex-row py-4 sm:p-6 items-center justify-center">
        <div className="flex justify-center items-center">
          <Image src={logoblackportrait} alt="logo" className="w-40 md:w-72" />
        </div>
        <div className=" text-center flex flex-col max-w-sm sm:max-w-lg mx-auto">
          <h2 className="text-lg sm:text-4xl   font-black">
            Jammin&#39; Genius with Notes of Knowledge!{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-purple-700 to-secondary">
              Assignment Help UK Strikes{" "}
            </span>
            the Right Chord!
          </h2>
          <p className="text-sm md:text-base lg:text-lg my-2">
            Ready for an academic jam like no other? Here, the knowledge vibes
            turn the volume up on success. Our chord-striking assignment help
            services harmonize affordability with a symphony of success. Refer
            three friends, snag a{" "}
            <span className="text-primary font-bold">30% discount</span>, and
            let the groove on!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
