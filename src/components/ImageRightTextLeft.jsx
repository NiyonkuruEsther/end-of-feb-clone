import React from "react";
import Wrapper from "./Wrapper";

const ImageRightTextLeft = ({ arr, h, p, styles, yes }) => {
  return (
    <Wrapper styles={`bg-mediumGray text-white flex flex-col gap-6`}>
      <p className="text-[30px]">{h}</p>
      <p className="text-lg">{p}</p>
      <div className={`grid md:grid-cols-2 gap-2 lg:gap-5 ${styles}`}>
        {arr.map((item, i) => {
          item = [...arr];
          return (
            <div
              key={i}
              className={` group flex border justify-between border-white gap-4 ${
                i === 2 && yes ? " hidden" : ""
              }`}
            >
              <div className="group-hover:group flex flex-col justify-end lg:gap-2 p-5">
                <h1 className="text-xl group-hover:bg-lightGray cursor-pointer md:text-sm xl:text-2xl font-semibold">
                  {item[0][i]}
                </h1>
                <p className=" md:text-xs xl:text-lg">{item[1][i]}</p>
              </div>
              <img
                className="lg:max-h-36 group-hover:brightness-90 max-h-44 w-40 object-center object-cover"
                src={item[2][i]}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ImageRightTextLeft;
