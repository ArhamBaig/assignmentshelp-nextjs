"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Rating } from "@mui/material";
import { quotemark, reversequotemark, reviewsimage } from "@/public";

const HomeReviews = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#f24080",
          borderRadius: "100px",
          color: "#f24080",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#f24080",
          borderRadius: "100px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="flex flex-col  py-16 bg-slate-300">
      <h3 className="text-4xl pb-14 text-center font-extrabold">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500 ">Reviews</span>.
      </h3>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between px-0 lg:px-16 xl:px-32 2xl:px-52">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={quotemark}
            alt="quotation mark for reviews"
            width={70}
            height={70}
          />

          <Slider
            {...settings}
            className="max-w-[250px] md:max-w-sm flex justify-center items-center py-0 lg:py-4 lg:mx-12"
          >
            <Review
              review={
                "accusamus. Deserunt explicabo hic sapiente. Voluptatibus, tempora."
              }
            />
            <Review
              review={
                "eaouf oiaeu naoeu ncpaieu cnapeu cnaieyfb aifnapiefn apecn apdkasndpu ansdoui naeifu baenfiaunefoaunedoamd;lkasnd;au"
              }
            />
            <Review
              review={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla vitae nobis ab optio quisquam, atque minima! Saepe, repudiandae sint non quae nam neque "
              }
            />
            <Review
              review={
                "asfn ien paiouenf paoiuenfpo skjdnfaojswefnpo asunf sajd nfpesuofn sapojfn poseauf naposwefn aposeunf oasenf;la smdkfnoa seunf;o askjdnf pouesnfp aosefn poasdnf jksaefn pasouefn psoaufn "
              }
            />
          </Slider>
          <Image
            src={reversequotemark}
            alt="quotation mark for reviews"
            width={70}
            height={70}
          />
        </div>
        <Image
          src={reviewsimage}
          alt="image for reviews"
          width={450}
          height={450}
          className="object-cover opacity-50 px-2 pt-3"
        />
      </div>
    </div>
  );
};

const Review = ({ review }) => {
  return (
    <div className="py-0 sm:px-0 sm:py-8 lg:px-4 lg:py-10 flex flex-col justify-center items-center">
      <p className="text-center text-lg pt-10">{review} </p>
      <Rating value={5} name="read-only" readOnly />
    </div>
  );
};

export default HomeReviews;
