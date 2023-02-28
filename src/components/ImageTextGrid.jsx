import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Wrapper from "./Wrapper";

const ImageTextGrid = ({ reverse, src, p, h, arr }) => {
  return (
    <Wrapper styles={`bg-mediumGray text-white`}>
      <div
        className={` items-center ${
          reverse
            ? "md:grid md:grid-cols-2 flex flex-col"
            : "lg:grid lg:grid-cols-2 flex flex-col"
        } `}
      >
        <img
          className={`md object-center object-cover ${
            reverse
              ? `${reverse}  lg:max-w-[600px] `
              : "xl:max-w-[680px] max-w-[900px] w-full lg:h-full px-1 lg:px-0"
          }`}
          src={src}
          alt=""
        />
        <div
          className={`px-1 pt-7 lg:p-12 flex flex-col gap-5 ${
            reverse ? "" : ""
          }`}
        >
          <h1 className="text-[28px]">{h}</h1>
          <p className="text-lg">{p}</p>
          {arr.map((item, i) => {
            return (
              <div
                className="flex group group-hover:bg-lightGray cursor-pointer items-center gap-4 text-lg"
                key={i}
              >
                <AiOutlineArrowRight className="group-hover:translate-x-2" />
                <p className="underline">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default ImageTextGrid;
