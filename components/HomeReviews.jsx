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
      <h3 className="text-4xl pb-20 text-center">
        Our Reviews<span className="text-secondary">.</span>
      </h3>
      <div className="flex justify-between px-56">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={quotemark}
            alt="quotation mark for reviews"
            width={70}
            height={70}
          />

          <Slider
            {...settings}
            className="max-w-lg flex justify-center items-center py-4"
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
          width={650}
          height={650}
          className="object-cover"
        />
      </div>
    </div>
  );
};

const Review = ({ review }) => {
  return (
    <div className="px-4 flex flex-col justify-between items-center">
      <p className="text-center pt-8 text-lg">{review} </p>
      <Rating value={5} name="read-only" readOnly />
    </div>
  );
};

export default HomeReviews;
