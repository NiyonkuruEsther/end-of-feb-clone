import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t border-white bg-mediumGray text-white lg:px-32 px-5 md:px-12 py-10 relative z-30">
      <div className=" grid space-y-12 xl:space-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10 ">
        <div>
          <Link href={"/"} className="inline-flex pb-10">
            <div className="group flex flex-col justify-center max-w-fit items-center">
              <h1 className={` text-7xl group-hover:group font-bold flex  `}>
                <span>A</span>
                <span className="group-hover:hidden">?</span>
                <span className="group-hover:block hidden">&quot;</span>
              </h1>
              <h4 className={`text-[6px] `}>Aalto University</h4>
            </div>
          </Link>
          <p>Aalto University</p>
          <p> P.O. Box 11000 (Otakaari 1B)</p>
          <p> FI-00076 AALTO</p>
          <p> Switchboard: +358 9 47001</p>

          <div className="pt-5">
            <h2>Follow us:</h2>
            <div className="flex gap-2">
              <Link href={"/"}>
                <FaFacebookF className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
              <Link href={"/"}>
                <FaTwitter className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
              <Link href={"/"}>
                <FaFacebookF className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
              <Link href={"/"}>
                <FaTwitter className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:ml-12 md:ml-4 lg:ml-0">
          <h2 className="text-xl">Quicklinks</h2>
          <div className="pt-3 space-y-1">
            {[
              "Research and artistic outputs",
              "Library – Learning Centre",
              "Admissions",
              "Alumni",
              "Media",
              "IT services",
              "Open University",
              "Aalto University Shop",
            ].map((item) => {
              return (
                <Link
                  key={item}
                  href="/"
                  className="block text-sm w-fit underline hover:bg-neutral-700"
                >
                  {" "}
                  {item}
                </Link>
              );
            })}
          </div>
          <h2 className="text-xl pt-7">Latest</h2>
          <div className="pt-3 space-y-1">
            {["News", "Events", "Careers"].map((item) => {
              return (
                <Link
                  key={item}
                  href="/"
                  className="block text-sm w-fit underline hover:bg-neutral-700"
                >
                  {" "}
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="sm:ml-12 md:ml-4 order-last lg:ml-0">
          <h2 className="text-xl">Contact</h2>
          <div className="pt-3 space-y-1">
            {["Campus maps", "Contact information"].map((item) => {
              return (
                <Link
                  key={item}
                  href="/"
                  className="block text-sm w-fit underline hover:bg-neutral-700"
                >
                  {" "}
                  {item}
                </Link>
              );
            })}
          </div>
          <h2 className="text-xl pt-7">For students</h2>
          <div className="pt-3 space-y-1">
            {["Student Guide", "Webmail", "MyCourses", "MyStudies", "Sisu"].map(
              (item) => {
                return (
                  <Link
                    key={item}
                    href="/"
                    className="block text-sm w-fit underline hover:bg-neutral-700"
                  >
                    {" "}
                    {item}
                  </Link>
                );
              }
            )}
          </div>
        </div>
        <div className="space-y-7 xl:border-t lg:order-last md:border-none w-fit max-w-fit pt-5 md:pt-0 lg:whitespace-nowrap xl:whitespace-normal ">
          <h2 className="text-2xl">Together towards a better world.</h2>
          <p>
            Support new ideas, research, work and leadership development towards
            a stronger Finland.
          </p>
          <button
            className={
              "bg-white inline-flex hover:border-none hover:bg-lightBlue hover:text-white text-black rounded-full py-3 px-5 whitespace-nowrap"
            }
          >
            Donate to Aalto University{" "}
          </button>
        </div>
      </div>

      <div className="border-t justify-between flex flex-col gap-3 xl:flex-row xl:gap-0 pt-5">
        <div className="md:flex md:flex-wrap space-y-3 md:gap-5 md:space-y-0">
          {[
            "Privacy notice",
            "Cookie policy",
            "Feedback",
            "Accessibility statement",
            "Cookie settings",
          ].map((item) => (
            <Link
              key={item}
              href="/"
              className="block text-sm w-fit underline hover:bg-neutral-700"
            >
              {" "}
              {item}
            </Link>
          ))}
        </div>
        <div className=" mt-10 md:mt-0 md:flex gap-5 space-y-3 md:space-y-0">
          {["Suomeksi", "Svenska", "English"].map((item, index) => (
            <Link
              key={item}
              href="/"
              className={`block text-sm w-fit underline ${
                index == 2 && "no-underline"
              } hover:bg-neutral-700`}
            >
              {" "}
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
