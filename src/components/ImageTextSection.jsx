import React from "react";
import ImagetextCard from "./ImageTextCard";
import Wrapper from "./Wrapper";

const ImageTextSection = () => {
  return (
    <div className="pt-24 pb-20 text-white">
      <Wrapper styles={`pb-6 gap-3 flex flex-col`}>
        <div className="flex justify-between">
          <h1 className="text-[28px]">Spotlight </h1>
          <button className="border border-white rounded-full px-6 ">
            Lorem text here
          </button>
        </div>
        <p className="text-xl">
          Find more current news and interesting events on the News and events
          page.
        </p>
      </Wrapper>

      <ImagetextCard
        arr={[
          [
            "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=HcTuQerX",
            "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2023-02/pipot4_1.jpg?h=a0adc964&itok=CSovV1uP",
            "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2022-03/SLUSH2019_21-11-2019_photo_Mikko_Raskinen_038.jpg?h=41f55a5b&itok=L4c2LyML",
          ],
          [
            "Shrinking from the heat",
            "Knit an Aalto hat for yourself or a friend!",
            "Aalto Startup Center makes global top three in 2021-2022 university business accelerator ranking",
          ],

          [
            "Knit an Aalto hat for yourself or a friend!",
            "Knit an Aalto hat for yourself or a friend!",
            "Knit an Aalto hat for yourself or a friend!",
          ],
        ]}
        news={["21.02.23", "21.02.23", "21.02.23"]}
      />
    </div>
  );
};

export default ImageTextSection;
