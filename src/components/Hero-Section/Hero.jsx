import React, { useRef, useState } from "react";
import { HeroData } from "../../assets/HeroImages/HeroData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
const Hero = () => {
  const [currentImage,setCurrentImage]=useState(0);
  const containerRef=useRef();
const handleNext = () => {
  setCurrentImage((prev) => {
    const nextIndex = prev < HeroData.length - 1 ? prev + 1 : 0;

    if (nextIndex === 0) {
      containerRef.current.scrollLeft = 0;
    } else {
      containerRef.current.scrollLeft += window.innerWidth;
    }
    return nextIndex;
  });
};

const handlePrevious = () => {
  setCurrentImage((prev) => {
    const prevIndex = prev > 0 ? prev - 1 : HeroData.length - 1;

    if (prevIndex === HeroData.length - 1) {
      containerRef.current.scrollLeft = window.innerWidth * (HeroData.length - 1);
    } else {
      containerRef.current.scrollLeft -= window.innerWidth;
    }
    return prevIndex;
  });
};

  return (
    <section className="relative">
      <div ref={containerRef} className="flex min-h-full max-h-[95vh] overflow-x-scroll scroll-smooth scrollbar-none snap-x snap-mandatory">
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
      <div className="hidden lg:flex items-end justify-end px-10 gap-5  absolute bottom-20 right-0">
        <button onClick={handlePrevious} className="bg-black p-1 rounded-full text-xl z-10 text-white">
          <FaAngleLeft />
        </button>
        <button onClick={handleNext} className="bg-black p-1 rounded-full text-xl z-10 text-white">
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;
