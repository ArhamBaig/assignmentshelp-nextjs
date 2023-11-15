import Image from "next/image";
import UsefulLink from "./UsefulLink";
import {
  logowhiteportrait,
  whitelocation,
  whitephone,
  whiteemail,
  facebook,
  pinterest,
  twitter,
  instagram,
  tumblr,
  flickr,
  linkedin,
} from "@/public";

import Link from "next/link";
const Footer = () => {
  return (
    <footer className="mt-auto bg-gradient-to-b from-primary/70 via-purple-700/50 to-primary/70 bg-slate-900 text-white py-4">
      <div className="flex flex-col 2xl:flex-row justify-center items-center px-4">
        <div className="2xl:border-r-[1px] 2xl:border-b-0 border-b-[1px] border-neutral-400 flex flex-col text-white p-10 max-w-sm">
          <div className="text-center flex flex-col justify-center items-center mb-4">
            <Image
              src={logowhiteportrait}
              alt="logo"
              width={250}
              height={250}
            />
          </div>
          <div className=" flex flex-col text-white ">
            <ul>
              <UsefulLink name="Home" href="/" />
              <UsefulLink name="Services" href="/allservices" />
              <UsefulLink name="Blogs" href="/blog" />
              <UsefulLink name="Reviews" href="/reviews" />
              <UsefulLink name="Contact" href="/contact" />
            </ul>
          </div>
          <div className="flex justify-between items-center mt-8">
            <Link
              href="https://www.facebook.com/bestessaywriter.co.uk"
              rel="nofollow"
              target="_blank"
            >
              <Image
                src={facebook}
                alt="our facebook page"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 transition-all"
              />
            </Link>
            <Link
              href="https://www.instagram.com/bestessaywriter.co.uk"
              rel="nofollow"
              target="_blank"
            >
              <Image
                src={instagram}
                alt="our instagram page"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 transition-all"
              />
            </Link>
            <Link
              href="https://twitter.com/BestEssayWrit13"
              rel="nofollow"
              target="_blank"
            >
              <Image
                src={twitter}
                alt="our twitter page"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 transition-all"
              />
            </Link>
            <Link
              href="https://www.pinterest.co.uk/best_essay_writer"
              rel="nofollow"
              target="_blank"
            >
              <Image
                src={pinterest}
                alt="our pinterest page"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 transition-all"
              />
            </Link>
            <Link
              href="https://www.tumblr.com/blog/view/bestessaywriter"
              rel="nofollow"
              target="_blank"
            >
              <Image
                src={tumblr}
                alt="our tumblr page"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 transition-all"
              />
            </Link>
            <Link
              href="https://www.flickr.com/photos/helpbestessaywritercouk"
              rel="nofollow"
              target="_blank"
            >
              <Image
                src={flickr}
                alt="our flickr page"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 transition-all"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/best-essay-writer"
              rel="nofollow"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="our linkedin page"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 transition-all"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
          <h3 className="font-bold text-2xl lg:pl-10 mb-2 mt-10 ">Services</h3>
          <div className="h-[1px] w-20 bg-secondary lg:ml-10 "></div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-4">
            <div className="items-center justify-center  md:justify-start md:items-start flex flex-col text-white px-2 sm:px-10 py-4">
              <h4 className="font-bold text-xl mb-2">Essays</h4>
              <ul className="flex flex-col justify-center items-center md:justify-start md:items-start  w-full">
                <UsefulLink name="Distinctive Essay" href="/distinctive-essay"/>
                <UsefulLink name="Reflective Essay" href="/" />
                <UsefulLink name="Narrative Essay" href="/" />
                <UsefulLink name="Descriptive Essay" href="/" />
                <UsefulLink name="Expository Essay" href="/" />
                <UsefulLink name="Persuasive Essay" href="/" />
                <UsefulLink name="Compare And Contrast Essay" href="/" />
                <UsefulLink name="Objective Essay" href="/" />
                <UsefulLink name="Subjective Essay" href="/" />
                <UsefulLink name="Marketing Essay" href="/" />
              </ul>
            </div>
            <div className="items-center justify-center  md:justify-start md:items-start flex flex-col text-white px-2 sm:px-10 py-4">
              <h4 className="font-bold text-xl mb-2">Reports</h4>
              <ul className="flex flex-col justify-center items-center md:justify-start md:items-start  w-full">
                <UsefulLink name="Data Science Report" href="/" />
                <UsefulLink
                  name="Digital Marketing and Branding Report"
                  href="/"
                />
                <UsefulLink name="Human Resource Management Report" href="/" />
                <UsefulLink
                  name="Accounting and Financial Management Report"
                  href="/"
                />
                <UsefulLink name="Audit and Risk Management Report" href="/" />
                <UsefulLink name="Project Management Report" href="/" />
                <UsefulLink name="Business Report" href="/" />
                <UsefulLink name="Law Report" href="/" />
                <UsefulLink name="Medical Report" href="/" />
                <UsefulLink name="Sustainability Report" href="/" />
              </ul>
            </div>
            <div className="items-center justify-center  md:justify-start md:items-start flex flex-col text-white  px-2 sm:px-10  py-4">
              <h4 className="font-bold text-xl mb-2">Assignment</h4>
              <ul className="flex flex-col justify-center items-center md:justify-start md:items-start  w-full">
                <UsefulLink name="IT Assignments" href="/" />
                <UsefulLink name="Leadership Assignments" href="/" />
                <UsefulLink name="Business Assignments" href="/" />
                <UsefulLink name="Blockchain Assignment" href="/" />
                <UsefulLink name="HR Assignment" href="/" />
                <UsefulLink name="Law Assignment" href="/" />
                <UsefulLink name="Nursing Assignment" href="/" />
                <UsefulLink name="Health Promotion Assignment" href="/" />
                <UsefulLink name="Literature Writing Assignment" href="/" />
                <UsefulLink name="Journal Assignment" href="/" />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center pt-4 mt-4 my-4 py-4 border-t-[1px] border-gray-100/10 lg:gap-10 ">
      <div className="flex justify-start items-start my-1">
        <Image src={whitelocation} height={25} width={25} alt="our location" />
        <p className="pl-2 text-left">
          551 Butcher Row, London E1W 3EP, United Kingdom
        </p>
      </div>
      <a href="tel:+447378489100">
        <div className="flex justify-start items-start my-1">
          <Image
            src={whitephone}
            height={25}
            width={25}
            alt="our contact number"
          />
          <p className="pl-2 hover:text-secondary text-left">+44 7378 489100</p>
        </div>
      </a>
      <a href="mailto:Scriptershubltd@gmail.com">
        <div className="flex my-1 items-center">
          <Image src={whiteemail} height={25} width={25} alt="our email" />
          <p className="pl-2 hover:text-secondary text-left">
            sales@bestessaywriter.co.uk
          </p>
        </div>
      </a>
      </div>
    </footer>
  );
};

export default Footer;
