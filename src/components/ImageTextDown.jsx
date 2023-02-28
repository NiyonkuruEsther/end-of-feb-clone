import React from "react";
import Wrapper from "./Wrapper";

const ImageTextDown = ({
  arr,
  styles,
  grid,
  h,
  otherStyles,
  imgSizes,
  yes,
}) => {
  return (
    <Wrapper styles={" text-white"}>
      <div
        className={`grid gap-x-4 ${otherStyles} ${
          grid === false ? styles : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {arr.map((item, i) => {
          item = [...arr];

          return (
            <div
              className={`h-fit group flex flex-col gap-1 bg-mediumGray ${
                i === 0 ? " lg:col-span-1" : ""
              } ${i === 0 && yes ? " md:col-span-2 lg:col-span-1 " : ""}`}
              key={i}
            >
              <img
                src={item[0][i]}
                alt=""
                className={` brightness-100 group-hover:brightness-90 transition-all duration-300 ${imgSizes}`}
              />
              <div
                className={`group-hover:group flex flex-col gap-5 ${
                  grid === false ? "px-6 pb-8 " : " pb-4"
                }`}
              >
                {h && (
                  <h1 className="text-[20px] group-hover:bg-lightGray w-fit font-semibold ">
                    {h[i]}
                  </h1>
                )}

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
