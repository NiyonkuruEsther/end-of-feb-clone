import React from "react";
import Wrapper from "./Wrapper";

const IconTextCard = ({ arr, h }) => {
  return (
    <Wrapper styles={`flex flex-col gap-4 bg-mediumGray text-white `}>
      <p className="self-center text-[30px]">{h}</p>
      <div className="flex justify-between gap-12 px-12">
        {arr.map((item, i) => {
          item = [...arr];
          console.log(i);
          return (
            <div className="flex items-center gap-4" key={i}>
              <img className="rounded-full w-24" src={item[1][i]} alt="" />
              <p className="text-xl">{item[0][i]}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default IconTextCard;
