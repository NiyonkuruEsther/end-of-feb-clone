import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiChevronDown, BiLockAlt, BiMenu, BiSearch } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoGlobeSharp } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const changescrolled = () => {
      window.scrollY >= 10
        ? setScrolled(window.scrollY)
        : setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", changescrolled);
    return () => {
      window.removeEventListener("scroll", changescrolled);
    };
  }, []);
  return (
    <div
      className={`fixed px-20 z-[9999] border-b border-white  w-full inset-x-0 top-0 flex justify-between items-center bg-mediumGray text-white  ${
        scrolled > 19 ? " py-1" : "py-3 transition-all delay-200"
      }`}
    >
      <div className="group flex flex-col justify-center max-w-fit items-center">
        <h1
          className={`group-hover:group font-bold flex  ${
            scrolled > 19 ? " text-2xl" : "text-7xl transition-all delay-200"
          } `}
        >
          <span>A</span>
          <span className="group-hover:hidden">?</span>
          <span className="group-hover:block hidden">&quot;</span>
        </h1>
        <h4
          className={` ${
            scrolled > 19 ? "text-[6px]" : "text-xs transition-all delay-200"
          } `}
        >
          Aalto University
        </h4>
      </div>
      <div className=" hidden lg:flex items-center gap-6">
        <ul className="flex items-center gap-10">
          <li>
            <Link
              className="flex items-center gap-2 hover:bg-lightGray p-1 "
              href="/support"
            >
              <BiLockAlt size={20} />
              <span>For personnel</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 hover:bg-lightGray p-1 "
              href="/support"
            >
              <CiHeart size={20} />
              <span>Support us</span>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-10 border-l pl-10">
          <li className="flex items-center gap-2 hover:bg-lightGray p-1">
            <IoGlobeSharp />
            <span>EN</span>
            <BiChevronDown />{" "}
          </li>
          <li className="flex items-center gap-2 hover:bg-lightGray p-1">
            <BiSearch />
            <span>Search</span>
          </li>
          <li className="flex items-center gap-2 hover:bg-lightGray p-1">
            <BiMenu /> <span>Menu</span>
          </li>
        </ul>
        <Link
          href="login"
          className="bg-white text-darkGray py-2 px-8 rounded-full hover:bg-lightBlue hover:text-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
