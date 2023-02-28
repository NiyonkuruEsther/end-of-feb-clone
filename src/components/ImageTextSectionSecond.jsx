import React from "react";
import ImagetextCard from "./ImageTextCard";
import Wrapper from "./Wrapper";

const ImageTextSectionSecond = () => {
  return (
    <div className="pb-20 pt-10 md:py-16 text-white">
      <Wrapper styles={`pb-6 gap-3 flex flex-col`}>
        {" "}
        <div className="flex justify-between">
          <h1 className="text-[28px]">Join our many events </h1>
          <button className="border hover:border-none hover:bg-lightBlue hover:text-white md:block hidden border-white rounded-full px-6 ">
            See all events
          </button>
        </div>
        <p className="text-xl">
          Find more current news and interesting events on the{" "}
          <span className="underline">News and events page.</span>
        </p>
      </Wrapper>
      <div className=" flex flex-col gap-3 md:-space-y-5">
        <ImagetextCard
          arr={[
            [
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2023-02/solvethesdgs_7.png?h=47551150&itok=pzdMdNKN",
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2023-02/energy_futures_1920x1080_orange.jpg?h=ae21e8e5&itok=9dmeTYPD",
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2023-01/SSD2023_hero_image_1920x1200px_150dpi_2.png?h=3bf3b255&itok=CKSPCq8U",
            ],
            [
              "Solve the SDGs 2023",
              "Energy Futures: Critical minerals, climate neutrality and transition pathways",
              "Energy Futures: Critical minerals, climate neutrality and transition pathways",
            ],

            [
              "Energy Futures: Critical minerals, climate neutrality and transition pathways",
              "Energy Futures: Critical minerals, climate neutrality and transition pathways",
              "Energy Futures: Critical minerals, climate neutrality and transition pathways",
            ],
          ]}
          news={["21.02.23", "21.02.23", "21.02.23"]}
        />
        <button className="md:hidden hover:border-none mx-5 py-2 hover:bg-lightBlue hover:text-white flex flex-col items-center border border-white rounded-full w-fit px-6 ">
          Lorem text here
        </button>
      </div>
    </div>
  );
};

export default ImageTextSectionSecond;
