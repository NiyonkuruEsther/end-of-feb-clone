import Image from "next/image";
import { BiChevronLeft, BiChevronRight, BiRightArrow } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useLayoutEffect, useState } from "react";

export default function HeroSection() {
  const slides = [
    {
      url: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2023-01/Terveysteknologia%20aivot.png?h=6f14bdd4&itok=ORy_ai_6",
    },
    {
      url: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2023-01/Student_Guide_Use_Only_Uusille%20opiskelijoille_Wide%20copy.png?h=3e501a53&itok=yYNhdC36",
    },
    {
      url: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2022-03/Blue%20and%20yellow%20flags%20by%20Kalle%20Kataila%2003032022%20001.png?h=74c6825a&itok=eo-pgDDo",
    },

    {
      url: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2023-02/Aalto_14_6_19_0006.jpg?h=3ae58c8b&itok=9CiU06kp",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className=" max-w-[1890px] xl:max-h-[1280px] flex items-end xl:h-[420px] mx-auto bg-cover "
    >
      <div className="xl:-mb-12 inset-x-0 z-50 xl:pl-10 xl:w-[1500px] 2xl:mx-auto xl:flex xl:items-start justify-start xl:max-w-full">
        <div className="bg-black text-white self-start py-6 xl:max-w-[680px] px-5 md:px-10 lg:px-20 xl:px-12 ">
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
                    <AiOutlineArrowRight
                      onClick={prevSlide}
                      className="text w-5 h-5 "
                    />
                    <span className="text underline group-hover:text-black">
                      {el}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="w-8 h-8 border border-white rounded-full flex justify-center items-center">
              <BiChevronLeft
                onClick={prevSlide}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <div className="flex items-center">
              {[0, 1, 2, 3].map((item, i) => {
                return (
                  <div
                    key={i}
                    className={`w-6 h-6 ${i === currentIndex ? "p-1" : "p-2"}`}
                  >
                    <div
                      className={`w-full h-full bg-white rounded-full`}
                    ></div>
                  </div>
                );
              })}
            </div>
            <div className="w-8 h-8 border border-white rounded-full flex justify-center items-center">
              <BiChevronRight
                onClick={nextSlide}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <img
          className="xl:hidden"
          src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2023-02/Aalto_14_6_19_0006.jpg?h=3ae58c8b&itok=9CiU06kp"
          alt=""
        />
      </div>
    </div>
  );
}
