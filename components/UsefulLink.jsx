import Link from "next/link";
const UsefulLink = ({ name, href }) => {
    return (
      <li className=" text-center lg:text-left border-b-[1px] border-slate-900 w-full h-full px-2 py-1 my-[2px]">
        <Link href={href} className=" hover:text-orange-600 text-sm md:text-base">
          {name}
        </Link>
      </li>
    );
  };

export default UsefulLink;