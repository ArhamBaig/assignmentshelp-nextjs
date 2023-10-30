
import Image from "next/image"
import {  essayico,
    dissertationico,
    assignmentico,
    casestudyico,
    reportico,} from "@/public"

const FeaturedServices = () => {
  return (
    <div className="flex flex-col xl:flex-row py-2 justify-center bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 justify-center items-center px-2">
            <Service image={essayico} alt="essay icon" title={"Essay"} desc={"Intro, body, and conclusion, with proper formatting and referencing."}/>
            <Service image={dissertationico} alt="essay icon" title={"Report"} desc={"The most professional 9-step structure, from the introduction to the decision."}/>
            <Service image={assignmentico} alt="essay icon" title={"Assignment"} desc={"The most reliable standards set by the educational leaders."}/>

            <Service image={casestudyico} alt="essay icon" title={"Case Study"} desc={"The best solutions for any case study of any topic."}/>
            <Service image={reportico} alt="essay icon" title={"Disseration"} desc={"5 chapters` breakdown - introduction, literature review, methodology, analysis, and conclusion."}/>
            <Service image={essayico} alt="essay icon" title={"Some title"} desc={"Some Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa pariatur"}/>
        </div>
    </div>
  )
}

const Service = ({image,alt,title,desc}) => {
    return(
        <div className="p-2 px-2 flex flex-col h-[150px] sm:h-[200px] m-1 rounded-lg border-[1px] border-secondary hover:shadow-lg hover:scale-105 cursor-pointer transition-all group relative bg-white hover:bg-pink-600/10 duration-200 ">
            <div className="absolute top-0 left-0 w-full h-0 group-hover:h-14 bg-gradient-to-b from-pink-400 via-secondary to-pink-700 rounded-t-lg transition-all duration-200 delay-200 -z-10"></div>
            <div className=" rounded-lg items-center grid grid-cols-12 w-full h-12 ">
            <Image src={image} alt={alt}  className="p-1 col-span-3" width={45} height={45} />
            <h3 className="text-lg sm:text-xl md:text-2xl py-1 font-bold col-span-9  text-rose-900 group-hover:text-white transition-all delay-200 duration-200">{title}</h3>
            </div>
            <div className=" pt-4 w-full">
                <p className="text-sm sm:text-base text-gray-800 line-clamp-4">{desc}</p>
            </div>
        </div>
    )
}

export default FeaturedServices