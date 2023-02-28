import Image from "next/image";
import Link from "next/link";

const Follow = () => {
  return (
    <div className="bg-gray1 py-20 relative z-30">
      <div className="h-[25rem] bg-lightBlue w-full gap-6 md:gap-0 text-white flex flex-col items-center justify-center relative z-10">
        <h2 className="font-bold text-3xl lg:text-6xl hover:pr-24 relative z-30">
          Follow Us
        </h2>
        <div className="relative flex gap-2 flex-col md:flex-row z-30">
          {["facebook", "twitter", "instagram", "linkedin"].map(
            (item, index) => {
              return (
                <Link
                  key={index}
                  href="/"
                  className="underline text-3xl hover:text-black hover:bg-white w-fit"
                >
                  {item}
                </Link>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Follow;
