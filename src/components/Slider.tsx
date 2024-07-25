"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Slides = [
  {
    id: 1,
    title: "FURNITURE",
    image: "/furniture.jpg",
    content: "Workshop & Store",
    description: "Slide 1 description",
  },
  {
    id: 2,
    title: "AC",
    image: "/ac.jpg",
    content: "Jasa Pasang dan Service AC",
    description: "Slide 2 description",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === Slides.length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className=" overflow-hidden relative">
      <div
        className="w-max h-[100vh] flex transition-all ease-in-out duration-700"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {Slides.map((slide, index) => (
          <div key={slide.id} className="w-screen h-full relative">
            {/* CONTAINER */}
            <div className="w-full ">
              <Image
                src={slide.image}
                quality={100}
                alt=""
                fill
                priority={true}
                className="object-cover"
              />
            </div>
            {/* TEXT CONTAINER */}
            <div className="text-center  py-2 px-4 md:px-6 m-auto absolute left-0 top-0 bottom-0  right-0 z-10 bg-gradient-to-t from-[#fbffee] to-transparent flex flex-col items-center pb-0 md:pb-24 justify-center md:justify-end gap-2 lg:gap-4 xl:gap-6">
              <h1 className="text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] bg-gradient-to-t from-[#a8ca41] to-[#e5f7b2] bg-clip-text text-transparent sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold ">
                {slide.title}
              </h1>
              <h2 className="  text-gray-700 text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">
                {slide.content}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-10 bottom-8 m-auto left-0 right-0 flex justify-center gap-4 ">
        {Slides.map((slide, index) => (
          <div
            className={` w-3 h-3 cursor-pointer rounded-full ring-1 flex items-center justify-center ${
              current === index ? "scale-150 ring-[#d2ee7f]" : "ring-gray-600"
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px]  bg-[#d2ee7f] rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
