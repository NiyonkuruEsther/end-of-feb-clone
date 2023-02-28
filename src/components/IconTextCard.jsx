import React from "react";
import Wrapper from "./Wrapper";

const IconTextCard = ({ arr, h }) => {
  return (
    <Wrapper styles={`flex flex-col gap-4 bg-mediumGray text-white`}>
      <p className="self-center text-[30px] hover:-translate-x-5">{h}</p>
      <div className="flex flex-col md:flex-row mx-auto lg:mx-0 justify-center items-center lg:justify-between gap-7 md:gap-12 px-12">
        {arr.map((item, i) => {
          item = [...arr];
          console.log(i);
          return (
            <div
              className="flex group md:flex-col self-start lg:flex-row items-center gap-4"
              key={i}
            >
              <img
                className="rounded-full cursor-pointer max-w-[85px] w-[64px] md:w-max"
                src={item[1][i]}
                alt=""
              />
              <p className="text-xl group-hover:bg-lightGray ">{item[0][i]}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default IconTextCard;
