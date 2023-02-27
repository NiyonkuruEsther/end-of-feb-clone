import React from "react";
import Wrapper from "./Wrapper";

const BlueBgSection = () => {
  return (
    <Wrapper styles={`bg-lightBlue flex flex-col text-white`}>
      <p>Follow us </p>
      <div className="flex">
        {[1, 2, 3, 4].map((item, i) => {
          return <div key={i}>Facebook</div>;
        })}
      </div>
    </Wrapper>
  );
};

export default BlueBgSection;
