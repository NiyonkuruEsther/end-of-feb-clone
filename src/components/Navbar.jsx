import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiChevronDown, BiLockAlt, BiMenu, BiSearch } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoGlobeSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaResearchgate } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(0);
  const [sticky, setSticky] = useState(scrolled);
  const [slide, setSlide] = useState(1);
  const [tabValue, setTabValue] = useState(0);

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
  }, [scrolled]);
  useEffect(() => {
    const changesticky = () => {
      window.scrollY >= 10
        ? setSticky(window.scrollY)
        : setSticky(window.scrollY);
    };
    window.addEventListener("scroll", changesticky);
    return () => {
      window.removeEventListener("scroll", changesticky);
    };
  }, [sticky]);

  useEffect(() => {
    document.body.style.overflow = tabValue ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [tabValue]);
  return (
    <>
      {" "}
      <div
        className={`fixed px-5 lg:px-20 z-[9999] border-b border-white hidden lg:flex w-full inset-x-0 top-0  justify-between items-center bg-mediumGray text-white  ${
          scrolled > 19 ? `py-1  ` : `py-3  transition-all delay-200`
        } `}
      >
        <div className="group flex flex-col justify-center max-w-fit items-center">
          <h1
            className={`group-hover:group font-bold flex  ${
              scrolled > 19
                ? " text-2xl"
                : "text-2xl lg:text-7xl lg:transition-all lg:delay-200"
            } `}
          >
            <span>A</span>
            <span className="group-hover:hidden">?</span>
            <span className="group-hover:block hidden">&quot;</span>
          </h1>
          <h4
            className={` ${
              scrolled > 19
                ? "text-[6px]"
                : " lg:block hidden text-xs transition-all delay-200"
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
            <Link
              href={""}
              onClick={() => setTabValue(1)}
              className="flex items-center gap-2 hover:bg-lightGray p-1 "
            >
              <BiSearch />

              <span>Search</span>
            </Link>
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
      {/* mobolie */}
      <div
        className={`fixed px-5 lg:px-20 z-[9999] border-b border-white lg:hidden flex w-full inset-x-0 top-0  justify-between items-center bg-mediumGray text-white  ${
          scrolled > 19
            ? `invisible  `
            : `py-3 visible transition-all delay-200`
        } `}
      >
        <div className="group flex flex-col justify-center max-w-fit items-center">
          <h1
            className={`group-hover:group font-bold flex  ${
              scrolled > 19
                ? " text-2xl"
                : "text-2xl lg:text-7xl lg:transition-all lg:delay-200"
            } `}
          >
            <span>A</span>
            <span className="group-hover:hidden">?</span>
            <span className="group-hover:block hidden">&quot;</span>
          </h1>
          <h4
            className={` ${
              scrolled > 19
                ? "text-[6px]"
                : " lg:block hidden text-xs transition-all delay-200"
            } `}
          >
            Aalto University
          </h4>
        </div>
        <div className="flex lg:hidden gap-3 items-center">
          <BiSearch size={20} className="pt-1" />
          <span>|</span>
          <p>Menu</p>
        </div>
      </div>
      {/* search content */}
      <div
        className={
          tabValue
            ? "w-screen text-white absolute mx-auto h-screen transition-all ease-in-out duration-300 opacity-100 inset-0 z-[10000000] overflow-hidden gradient"
            : "transition-all duration-0 absolute opacity-0 h-0 bottom-0 overflow-hidden mx-auto"
        }
      >
        <div className="max-w-3xl items-center pt-12 mx-auto flex w-full justify-between">
          <p className="text-xl font-semibold">Search</p>
          <div className=" flex justify-end">
            <div className="bg-gray p-5">
              <RxCross1
                className={`self-end hover:border w-10 h-10 p-2 rounded-full ${
                  tabValue === 1 ? " " : ""
                }`}
                onClick={() => {
                  setTabValue(0), setSlide(1);
                }}
              />
            </div>
          </div>
        </div>

        <div className="h-6"></div>
        <div className="max-w-4xl flex justify-between items-center px-6 py-2 mx-auto border-2 rounded-full border-white bg-transparent">
          <input
            type=""
            placeholder=""
            className="outline-none bg-transparent"
          />
          <BiSearch size={25} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
