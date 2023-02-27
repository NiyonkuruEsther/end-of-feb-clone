import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper style="">
      <div className="border-t bg-darkGray text-white py-10 relative z-30">
        <div className=" grid grid-cols-4 pb-10 ">
          <div>
            <div>
              {" "}
              <div className="flex text-white text-7xl font-extrabold items-center">
                <p>A</p>
                <p>?</p>
              </div>
              <p className="text-xs font-semibold">Aalto University</p>
            </div>
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
          <div>
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
          <div>
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
              {[
                "Student Guide",
                "Webmail",
                "MyCourses",
                "MyStudies",
                "Sisu",
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
          </div>
          <div className="space-y-7">
            <h2 className="text-2xl">Together towards a better world.</h2>
            <p>
              Support new ideas, research, work and leadership development
              towards a stronger Finland.
            </p>
            <button></button>
          </div>
        </div>
        <div className="border-t flex pt-5">
          <div className="flex gap-5">
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
                className="text-sm w-fit underline hover:bg-neutral-700"
              >
                {" "}
                {item}
              </Link>
            ))}
          </div>
          <div className="ml-auto flex gap-5">
            {["Suomeksi", "Svenska", "English"].map((item, index) => (
              <Link
                key={item}
                href="/"
                className={`text-sm w-fit underline ${
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
    </Wrapper>
  );
};

export default Footer;
