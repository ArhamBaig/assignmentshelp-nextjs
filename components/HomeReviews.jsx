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
    <div className="flex flex-col  py-16 bg-slate-100 ">
      <h3 className="text-4xl pb-14 text-center font-extrabold">
      Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500 ">
        Students&#39;
        </span>
        {" "}
        Buzzing Raves
      </h3>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between px-0 lg:px-16 xl:px-32 2xl:px-72">
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
                "Their punctuality is no joke! I got my assignment right on time. It's a perfect combo of efficiency and quality. Highly Recommended!"
              }
            />
            <Review
              review={
                "The communication with my writer was smooth, and the paper quality reflected genuine expertise. I must appreciate their attention to detail!"
              }
            />
            <Review
              review={
                "The revisions brought my assignment to a whole new level. They genuinely did a great job."
              }
            />
            <Review
              review={
                "Of course, my queries were answered promptly, and the overall experience was good. It's a reliable service with a professional touch! Thanks for your assistance:)"
              }
            />
            <Review
              review={
                "A practical choice for budget-conscious students. Highly recommended!"
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
          className="object-cover px-2 pt-3"
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
