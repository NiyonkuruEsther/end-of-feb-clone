import React from "react";

const Wrapper = ({ children, styles }) => {
  return (
    <div
      className={`max-w-[1540px] px-[16px] md:px-[40px]  lg:px-[80px] mx-auto ${styles}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
