import React from "react";
import Wrapper from "./Wrapper";

const ImageTextDown = ({
  arr,
  styles,
  grid,
  h,
  otherStyles,
  imgSizes,
  cardStyles,
}) => {
  return (
    <Wrapper styles={" text-white"}>
      <div
        className={`grid gap-x-4 ${otherStyles} ${
          grid === false ? styles : " grid-cols-4"
        }`}
      >
        {arr.map((item, i) => {
          item = [...arr];

          return (
            <div className="flex flex-col gap-1 bg-mediumGray" key={i}>
              <img src={item[0][i]} alt="" className={`${imgSizes}`} />
              <div
                className={` flex flex-col gap-5 ${
                  grid === false ? "px-6 pb-8 " : " pb-4"
                }`}
              >
                {h && <h1 className="text-[20px] font-semibold">{h[i]}</h1>}

                <p className="text-[16px] leading-tight">{item[1][i]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ImageTextDown;
