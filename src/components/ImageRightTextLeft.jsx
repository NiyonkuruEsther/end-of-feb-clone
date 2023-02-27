import React from "react";
import Wrapper from "./Wrapper";

const ImageRightTextLeft = ({ arr, h, p }) => {
  return (
    <Wrapper styles={`bg-mediumGray text-white flex flex-col gap-6`}>
      <p className="text-[30px]">{h}</p>
      <p className="text-lg">{p}</p>
      <div className="grid grid-cols-2 gap-5">
        {" "}
        {arr.map((item, i) => {
          item = [...arr];
          console.log(item[3]);
          return (
            <div
              key={i}
              className="flex border justify-between border-white gap-4"
            >
              {" "}
              <div className="flex flex-col justify-end gap-2 whitespace-preline p-5">
                <h1 className="text-2xl">{item[0][i]}</h1>
                <p className="text-lg">{item[1][i]}</p>
              </div>
              <img
                className="max-h-36 w-40 object-center object-cover"
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
