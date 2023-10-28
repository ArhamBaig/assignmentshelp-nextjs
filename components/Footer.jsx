import { logo } from "@/public"
import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="bg-stone-950 mt-auto py-24 flex justify-center items-center">
        <div className="flex flex-col items-center pr-20">
            <Image src={logo} alt="assignment help logo" width={120} height={120} className="object-cover"/>
            <div className="flex flex-col py-10 w-full">
            <Link href={"/home"} className="footer-link w-full">Home</Link>
            <Link href={"/home"} className="footer-link w-full">Services</Link>
            <Link href={"/home"} className="footer-link w-full">Reviews</Link>
            <Link href={"/home"} className="footer-link w-full">Blogs</Link>
            <Link href={"/home"} className="footer-link w-full">Contact Us</Link>
            </div>
            <p className="text-gray-400">&copy; Assignmenthelp 2023.</p>
        </div>
        <div className="grid grid-cols-3 gap-12 pl-20 border-l-[1px] border-gray-400 ">
            <div className="px-5 flex flex-col">
                <h4 className="text-gray-300 font-bold">Assignment</h4>
                <Link href={"#"} className="footer-link">HEOunofaeufn</Link>
                <Link href={"#"} className="footer-link">aefnaeonef aef aef aef</Link>
                <Link href={"#"} className="footer-link">a erhdhdhg dhdthdfgarg a</Link>
                <Link href={"#"} className="footer-link">asegf aserg rgh adrhdrhdh</Link>
                <Link href={"#"} className="footer-link">aseg aseg sag gasegaeufn</Link>
                <Link href={"#"} className="footer-link">ag seg aseg aseg aseg awseg saeg</Link>
                <Link href={"#"} className="footer-link">tha thdthasdrfgasrg arg ars gasrg</Link>
            </div>
            <div className="px-5 flex flex-col">
                <h4 className="text-gray-300 font-bold">Assignment</h4>
                <Link href={"#"} className="footer-link">HEOunofaeufn</Link>
                <Link href={"#"} className="footer-link">aefnaeonef aef aef aef</Link>
                <Link href={"#"} className="footer-link">a erhdhdhg dhdthdfgarg a</Link>
                <Link href={"#"} className="footer-link">asegf aserg rgh adrhdrhdh</Link>
                <Link href={"#"} className="footer-link">aseg aseg sag gasegaeufn</Link>
                <Link href={"#"} className="footer-link">ag seg aseg aseg aseg awseg saeg</Link>
                <Link href={"#"} className="footer-link">tha thdthasdrfgasrg arg ars gasrg</Link>
            </div>
            <div className="px-5 flex flex-col">
                <h4 className="text-gray-300 font-bold">Assignment</h4>
                <Link href={"#"} className="footer-link">HEOunofaeufn</Link>
                <Link href={"#"} className="footer-link">aefnaeonef aef aef aef</Link>
                <Link href={"#"} className="footer-link">a erhdhdhg dhdthdfgarg a</Link>
                <Link href={"#"} className="footer-link">asegf aserg rgh adrhdrhdh</Link>
                <Link href={"#"} className="footer-link">aseg aseg sag gasegaeufn</Link>
                <Link href={"#"} className="footer-link">ag seg aseg aseg aseg awseg saeg</Link>
                <Link href={"#"} className="footer-link">tha thdthasdrfgasrg arg ars gasrg</Link>
            </div>
            <div className="px-5 flex flex-col">
                <h4 className="text-gray-300 font-bold">Assignment</h4>
                <Link href={"#"} className="footer-link">HEOunofaeufn</Link>
                <Link href={"#"} className="footer-link">aefnaeonef aef aef aef</Link>
                <Link href={"#"} className="footer-link">a erhdhdhg dhdthdfgarg a</Link>
                <Link href={"#"} className="footer-link">asegf aserg rgh adrhdrhdh</Link>
                <Link href={"#"} className="footer-link">aseg aseg sag gasegaeufn</Link>
                <Link href={"#"} className="footer-link">ag seg aseg aseg aseg awseg saeg</Link>
                <Link href={"#"} className="footer-link">tha thdthasdrfgasrg arg ars gasrg</Link>
            </div>
            <div className="px-5 flex flex-col">
                <h4 className="text-gray-300 font-bold">Assignment</h4>
                <Link href={"#"} className="footer-link">HEOunofaeufn</Link>
                <Link href={"#"} className="footer-link">aefnaeonef aef aef aef</Link>
                <Link href={"#"} className="footer-link">a erhdhdhg dhdthdfgarg a</Link>
                <Link href={"#"} className="footer-link">asegf aserg rgh adrhdrhdh</Link>
                <Link href={"#"} className="footer-link">aseg aseg sag gasegaeufn</Link>
                <Link href={"#"} className="footer-link">ag seg aseg aseg aseg awseg saeg</Link>
                <Link href={"#"} className="footer-link">tha thdthasdrfgasrg arg ars gasrg</Link>
            </div>
            <div className="px-5 flex flex-col">
                <h4 className="text-gray-300 font-bold">Assignment</h4>
                <Link href={"#"} className="footer-link">HEOunofaeufn</Link>
                <Link href={"#"} className="footer-link">aefnaeonef aef aef aef</Link>
                <Link href={"#"} className="footer-link">a erhdhdhg dhdthdfgarg a</Link>
                <Link href={"#"} className="footer-link">asegf aserg rgh adrhdrhdh</Link>
                <Link href={"#"} className="footer-link">aseg aseg sag gasegaeufn</Link>
                <Link href={"#"} className="footer-link">ag seg aseg aseg aseg awseg saeg</Link>
                <Link href={"#"} className="footer-link">tha thdthasdrfgasrg arg ars gasrg</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer