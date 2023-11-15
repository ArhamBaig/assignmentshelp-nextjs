import Link from "next/link";
const UsefulLink = ({ name, href }) => {
    return (
      <li className=" text-center lg:text-left border-b-[1px] border-purple-800 w-full h-full px-2 py-1 my-[2px]">
        <Link href={href} className=" hover:text-secondary text-sm md:text-base">
          {name}
        </Link>
      </li>
    );
  };

export default UsefulLink;