import Link from "next/link";
import Wrapper from "./Wrapper";

const Explore = () => {
  return (
    <div className="h-96 py-24 mb-12 bg-[url('https://www.aalto.fi/sites/g/files/flghsv161/files/styles/s2560wc_1800w_400h_n/public/2020-01/unto_rautio_aalto_dsc5557_web.jpg?itok=vZ292N9N')]">
      <Wrapper styles=" py-20 relative ">
        <div className="absolute max-w-6xl w-full bg-lightBlue h-72">
          <div className="pl-20 py-14">
            <h1 className="text-7xl text-white font-semibold text-center">
              Explore Aalto University
            </h1>
          </div>
          <div className="border-t text-white grid grid-cols-3 justify-items-center overflow-hidden">
            <div className="pt-10">
              <Link
                href={"/"}
                className="underline text-2xl hover:bg-white hover:text-black"
              >
                Study at Aalto
              </Link>
            </div>
            <div className="border-x px-20 py-9">
              <Link
                href={"/"}
                className="underline text-2xl hover:bg-white hover:text-black"
              >
                Study at Aalto
              </Link>
            </div>
            <div className="pt-10">
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
