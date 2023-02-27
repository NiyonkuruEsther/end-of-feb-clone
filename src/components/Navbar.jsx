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
      className={`fixed px-20 z-[9999] border-b border-white  w-full inset-x-0 top-0 flex justify-between items-center py-3 bg-mediumGray text-white  `}
    >
      <div className="group flex flex-col justify-center items-center">
        <h1
          className={` font-bold group-hover:after:content-["\""] after:content-["?"] ${
            scrolled > 19 ? " text-2xl" : "text-7xl transition-all duration-0"
          } `}
        >
          A
        </h1>
        <h4
          className={`${
            scrolled > 19 ? "text-sm" : "text-4xl transition-all duration-0"
          } `}
        >
          Aalto University
        </h4>
      </div>
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-10">
          <li>
            <Link className="flex items-center gap-2 " href="/support">
              <BiLockAlt size={20} />
              <span>For personnel</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 " href="/support">
              <CiHeart size={20} />
              <span>Support us</span>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-10 border-l pl-10">
          <li className="flex items-center gap-2">
            <IoGlobeSharp />
            <span>EN</span>
            <BiChevronDown />{" "}
          </li>
          <li className="flex items-center gap-2">
            <BiSearch />
            <span>Search</span>
          </li>
          <li className="flex items-center gap-2">
            <BiMenu /> <span>Menu</span>
          </li>
        </ul>
        <Link
          href="login"
          className="bg-white text-darkGray py-2 px-8 rounded-full"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
