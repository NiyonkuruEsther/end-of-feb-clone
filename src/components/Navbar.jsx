import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiChevronDown, BiLockAlt, BiMenu, BiSearch } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoGlobeSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { TbFilePencil } from "react-icons/tb";
import { BsFillMenuButtonFill } from "react-icons/bs";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(0);
  const [sticky, setSticky] = useState(scrolled);
  const [slide, setSlide] = useState(1);
  const [tabValue, setTabValue] = useState(0);
  const [menuValue, setMenuValue] = useState(0);

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
  useEffect(() => {
    document.body.style.overflow = tabValue ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [menuValue]);
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
              onClick={() => (setTabValue(1), setMenuValue(0))}
              className="flex items-center gap-2 hover:bg-lightGray p-1 "
            >
              <BiSearch />

              <span>Search</span>
            </Link>
            <li
              onClick={() => (setMenuValue(1), setTabValue(0))}
              className={`flex items-center gap-2 hover:bg-lightGray p-1 cursor-pointer ${
                menuValue === 1 ? " hidden" : ""
              }`}
            >
              <BiMenu /> <span>Menu</span>
            </li>
            <li
              className={`${
                menuValue === 0 ? " hidden" : ""
              } flex items-center gap-2 cursor-pointer hover:bg-lightGray`}
              onClick={() => setMenuValue(0)}
            >
              <RxCross1 /> <span>Close menu</span>
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
          scrolled > 26
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
            ? "w-screen text-white absolute mx-auto h-screen transition-all ease-in-out duration-300 opacity-100 inset-x-0 z-[10000000] overflow-hidden gradient"
            : "absolute opacity-0 h-0 bottom-0 overflow-hidden mx-auto"
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
      {/* menu content */}
      {menuValue ? (
        <div
          className={` auto fixed inset-x-0 right-0 z-[100] grid w-screen h-screen overflow-hidden bg-white bg-opacity-70`}
        >
          <div className=" w-[1100px] bg-mediumGray text-white right-0 fixed">
            <div className="relative h-screen overflow-y-auto">
              <div className="px-10 space-y-6  pt-36 ">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-12">
                    {[
                      {
                        icon: <BsFillMenuButtonFill className="text-2xl" />,
                        title: "Services",
                      },
                      {
                        icon: <BsFillMenuButtonFill className="text-2xl" />,
                        title: "Site index",
                      },
                      {
                        icon: <FaGraduationCap className="text-2xl" />,
                        title: "Student guide",
                      },
                      {
                        icon: <TbFilePencil className="text-2xl" />,
                        title: "Apply to Aalto",
                      },
                    ].map((e, i) => (
                      <Link key={i} href={e?.title}>
                        <div key={i} className="flex flex-col items-center ">
                          {e?.icon}
                          <p className="text-base leading-[1.9rem] text-center">
                            {e?.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <p>
                    Aalto community members please log in to see internal
                    content
                  </p>
                </div>

                <div className="flex flex-col justify-between cursor-pointer  pb-12">
                  {[
                    "Admissions and applying",
                    "News and events",
                    "Research and art",
                    "For students",
                    "Schools and departments",
                    "Tools",
                    "About us",
                    "Collaboration",
                    ,
                  ].map((item, i) => {
                    return (
                      <details
                        key={i}
                        // href={e}
                        className="block  border-y group "
                      >
                        <summary className="flex hover:border-l-4 hover:bg-lightGray items-center justify-between p-6 py-4 hover:bg-brandGray-light h-fit ">
                          <p className="text-2xl font-bold leading-[30px] whitespace-nowrap ">
                            {" "}
                            {item}
                          </p>

                          <AiOutlinePlus className="text-2xl" />
                        </summary>
                        <div className="p-6 2xl:mr-40 grid grid-cols-3 gap-y-3">
                          {[
                            "Apply to Aalto",
                            "Find a study programme",
                            "How to apply",
                            "Scholarships and tuition fees",
                            "Bachelor's admissions",
                            "Master's admissions",
                            "Doctoral admissions",
                            "Campus life",
                            "Events for applicants",
                            "Chat with students",
                            "Subscribe to newsletter",
                            "Lifewide Learning",
                            "Contact admission services",
                            "Exchange students",
                          ].map((item, i) => (
                            <Link
                              key={i}
                              href={item}
                              className="p-1 underline hover:bg-lightGray w-fit "
                            >
                              <p className="text-sm">{item}</p>
                            </Link>
                          ))}
                        </div>
                      </details>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
