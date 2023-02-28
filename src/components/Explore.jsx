import Link from "next/link";
import Wrapper from "./Wrapper";

const Explore = () => {
  return (
    <div className="h-96 mb-56 lg:py-24 lg:mb-32 mt-16 bg-center bg-[url('https://www.aalto.fi/sites/g/files/flghsv161/files/styles/s2560wc_1800w_400h_n/public/2020-01/unto_rautio_aalto_dsc5557_web.jpg?itok=vZ292N9N')]">
      <Wrapper styles=" py-20 lg:relative ">
        <div className=" lg:max-w-4xl mx-auto xl:max-w-7xl max-w-3xl w-full bg-lightBlue lg:h-72">
          <div className="pl-6 xl:pl-20 py-14">
            <h1 className="text-6xl lg:text-7xl text-white font-semibold ">
              Explore Aalto University
            </h1>
          </div>
          <div className="border-t text-center whitespace-nowrap lg:divide-x  xl:px-16 2xl:px-0 text-white flex flex-col items-center lg:grid lg:grid-cols-3 justify-items-center overflow-hidden">
            <div className="xl:pt-9 w-full py-5 border-b lg:border-b-0 md:py-12 xl:px-32">
              <Link
                href={"/"}
                className="underline text-2xl hover:bg-white  hover:text-black"
              >
                Study at Aalto
              </Link>
            </div>
            <div className="px-12 w-full md:py-9 py-5 border-b lg:border-b-0 xl:px-36">
              <Link
                href={"/"}
                className="underline text-2xl hover:bg-white hover:text-black"
              >
                Study at Aalto
              </Link>
            </div>
            <div className="xl:pt-10 py-5 md:py-12 px-12 ">
              <Link
                href={"/"}
                className="underline text-2xl hover:bg-white hover:text-black"
              >
                Study at Aalto
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Explore;
