import React from "react";
import Wrapper from "./Wrapper";

const ImagetextCard = ({ styles, arr, news }) => {
  return (
    <Wrapper styles={` text-white flex flex-col gap-5 ${styles}`}>
      <div className="grid max-h-fit h-max lg:grid-rows-2  grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-4  text-white">
        {arr.map((item, i) => {
          item = [...arr];

          return (
            <div
              key={i}
              className={`group flex flex-col gap-2 border h-fit md:h-full border-white bg-mediumGray ${
                i === 0 ? "lg:col-span-2 col-span-1" : ""
              }`}
            >
              <img
                className="xl:max-h-44 object-cover"
                src={item[0][i]}
                alt=""
              />
              <div className="flex group-hover:group flex-col gap-4 p-6 justify-between h-full text-lg leading-tight">
                <h1 className="text-xl font-semibold group-hover:bg-lightGray cursor-pointer">
                  {item[1][i]}
                </h1>
                <p>{item[2][i]}</p>
                <p className="text-sm justify-self-end"> {news[i]}| News</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ImagetextCard;
