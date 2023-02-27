import Image from "next/image";
import { BiChevronLeft, BiChevronRight, BiRightArrow } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function HeroSection() {
  return (
    <div className=" mt-28 max-w-[1890px] max-h-[1280px] flex items-end h-[420px] mx-auto bg-cover bg-[url('https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2023-02/Aalto_14_6_19_0006.jpg?h=3ae58c8b&itok=9CiU06kp')]">
      <div className="-mb-12 inset-x-0 z-50 mx-10">
        <div className="bg-black  text-white py-6 xl:max-w-[680px] px-12">
          <h1 className="text-[34px] leading-[42px] mb-4">
            How tech is transforming diagnostics and care
          </h1>
          <p className="text-xl mb-4 ">
            Read three inspiring stories of how Aaltonians are bringing new hope
            to people who suffer from
          </p>
          <div className="gap-2 flex flex-col">
            {["Alzheimers disease", "ADHD", "Alcoholism"].map((el, i) => {
              return (
                <div key={i} className="group">
                  <div className="flex gap-2 items-center  group-hover:bg-white w-fit">
                    <AiOutlineArrowRight className="text w-5 h-5 " />
                    <span className="text underline group-hover:text-black">
                      {el}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="w-8 h-8 border border-white rounded-full flex justify-center items-center rotate-180">
              <BiChevronRight className="w-5 h-5" />
            </div>
            <div className="flex items-center">
              {[0, 1, 2, 3].map((el) => {
                return (
                  <div key={el} className={`w-6 h-6 ${el ? "p-2" : "p-1"}`}>
                    <div
                      className={`w-full h-full bg-white rounded-full`}
                    ></div>
                  </div>
                );
              })}
            </div>
            <div className="w-8 h-8 border border-white rounded-full flex justify-center items-center">
              <BiChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative w-full aspect-[3/1] max-w-max mx-auto">
        <img
          src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2023-01/Student_Guide_Use_Only_Uusille%20opiskelijoille_Wide%20copy.png?h=3e501a53&itok=yYNhdC36"
          className="object-cover"
        />
      </div> */}
    </div>
  );
}
