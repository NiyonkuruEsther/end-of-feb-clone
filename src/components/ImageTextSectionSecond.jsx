import React from "react";
import ImagetextCard from "./ImageTextCard";
import Wrapper from "./Wrapper";

const ImageTextSectionSecond = () => {
  return (
    <div className="py-16 text-white">
      <Wrapper styles={`pb-6 gap-3 flex flex-col`}>
        {" "}
        <div className="flex justify-between">
          <h1 className="text-[28px]">Join our many events </h1>
          <button className="border border-white rounded-full px-6 ">
            See all events
          </button>
        </div>
        <p className="text-xl">
          Find more current news and interesting events on the{" "}
          <span className="underline">News and events page.</span>
        </p>
      </Wrapper>
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
            "Sustainability Science Days 2023: PATHWAYS OF HOPE – Knowledge, Actions, Solutions",
          ],

          [
            "Energy Futures: Critical minerals, climate neutrality and transition pathways",
            "Energy Futures: Critical minerals, climate neutrality and transition pathways",
            "Energy Futures: Critical minerals, climate neutrality and transition pathways",
          ],
        ]}
        news={["21.02.23", "21.02.23", "21.02.23"]}
      />
    </div>
  );
};

export default ImageTextSectionSecond;
