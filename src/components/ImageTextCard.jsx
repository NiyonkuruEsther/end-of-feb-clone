import React from "react";
import Wrapper from "./Wrapper";

const ImagetextCard = ({ styles, arr, news }) => {
  return (
    <Wrapper styles={` text-white flex flex-col gap-5 ${styles}`}>
      <div className="grid grid-cols-3 gap-4  text-white">
        {arr.map((item, i) => {
          item = [...arr];
          console.log(item[2]);
          return (
            <div
              key={i}
              className="flex flex-col gap-2 border border-white bg-mediumGray"
            >
              <img className="max-h-44 object-cover" src={item[0][i]} alt="" />
              <div className="flex flex-col gap-4 p-6 justify-between h-full text-lg leading-tight">
                <h1 className="text-xl font-semibold">{item[1][i]}</h1>
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
