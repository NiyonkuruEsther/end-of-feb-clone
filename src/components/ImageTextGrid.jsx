import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Wrapper from "./Wrapper";

const ImageTextGrid = ({ reverse, src, p, h, arr }) => {
  return (
    <Wrapper styles={`bg-mediumGray text-white`}>
      <div className={`grid grid-cols-2 items-center `}>
        <img className={`max-w-[560px] ${reverse}`} src={src} alt="" />
        <div className="p-12 flex flex-col gap-5">
          <h1 className="text-[28px]">{h}</h1>
          <p className="text-lg">{p}</p>
          {arr.map((item, i) => {
            return (
              <div className="flex items-center gap-4 text-lg" key={i}>
                <AiOutlineArrowRight />
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
