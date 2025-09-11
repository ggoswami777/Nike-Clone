import React from "react";
import { HeroData } from "../../assets/HeroImages/HeroData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
const Hero = () => {
  return (
    <section>
      <div className="flex min-h-full max-h-[95vh] overflow-x-scroll scroll-smooth scrollbar-none snap-x snap-mandatory">
        {HeroData.map((data) => {
          return (
            <div
              key={data.id}
              className="min-w-full snap-center flex flex-col items-center"
            >
         
              <div className="w-full lg:h-[70vh] h-[50vh] transition-all ">
                <img
                  className="h-full w-full object-cover object-center"
                  src={data.img}
                  alt={data.title}
                />
              </div>

              {/* Title below image */}
              <div className="container mx-auto text-center py-6 flex flex-col">
                <h2 className="font-bold text-2xl lg:text-6xl text-black uppercase drop-shadow-2xl">
                  {data.title}
                </h2>
                <p className="text-gray-600">{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-end justify-end px-10 gap-5">
        <button className="bg-black p-1 rounded-full text-xl z-10 text-white">
          <FaAngleLeft />
        </button>
        <button className="bg-black p-1 rounded-full text-xl z-10 text-white">
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;
