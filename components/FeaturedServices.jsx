
import Image from "next/image"
import {  essayico,
    dissertationico,
    assignmentico,
    casestudyico,
    reportico,} from "@/public"

const FeaturedServices = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row bg-slate-300  ">
        <div className="flex flex-wrap justify-center py-6">
            <Service image={essayico} alt="essay icon" title={"Essay"} desc={"Intro, body, and conclusion, with proper formatting and referencing."}/>
            <Service image={dissertationico} alt="essay icon" title={"Report"} desc={"The most professional 9-step structure, from the introduction to the decision."}/>
            <Service image={assignmentico} alt="essay icon" title={"Assignment"} desc={"The most reliable standards set by the educational leaders."}/>
            <Service image={casestudyico} alt="essay icon" title={"Case Study"} desc={"The best solutions for any case study of any topic."}/>
            <Service image={reportico} alt="essay icon" title={"Disseration"} desc={"5 chapters` breakdown - introduction, literature review, methodology, analysis, and conclusion."}/>
            <Service image={essayico} alt="essay icon" title={"Some title"} desc={"Some Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa pariatur amet iusto provident"}/>
        </div>
    </div>
  )
}

const Service = ({image,alt,title,desc}) => {
    return(
        <div className="p-2 px-2 flex flex-col w-[310px] ">
            <h3 className="text-xl md:text-2xl py-1 bg-secondary w-full text-center rounded-lg text-white">{title}</h3>
            <div className="grid grid-cols-12 gap-2 pt-4 w-full">
                <Image src={image} alt={alt}  className="col-span-3 w-full"/>
                <p className="max-w-[200px] col-span-9 text-xs sm:text-base">{desc}</p>
            </div>

        </div>
    )
}

export default FeaturedServices