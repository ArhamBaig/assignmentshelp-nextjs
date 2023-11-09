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
      <div className="flex flex-col md:flex-row p-6 items-center justify-center">
        <div className="flex justify-center items-center">
          <Image src={logoportrait} width={250} height={200} alt="logo" />
        </div>
        <div className="text-white  text-center flex flex-col max-w-xs md:max-w-xl mx-auto">
          <h2 className="text-5xl  font-bold">Dive into the Ocean of Knowledge</h2>
          <p>
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
