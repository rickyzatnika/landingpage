"use client"

import Image from "next/image";
import { useState, useEffect } from "react";


const Slides = [ 
    {
        id: 1,
        title: 'AC',
        image: 'https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QUN8ZW58MHx8MHx8fDA%3D',
        content: 'Jasa Pasang dan Service AC',
        description: 'Slide 1 description',

    },
    {
        id: 2,
        title: 'FURNITURE',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
        content: 'Workshop & Store',
        description: 'Slide 2 description',

    },
    {
        id: 3,
        title: 'Slide 3',
        image: 'https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg?auto=compress&cs=tinysrgb&w=600',
        content: 'Menjual Berbagai Furniture Berkualitas',
        description: 'Slide 3 description',

    },

]

const Slider = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === Slides.length - 1? 0 : current + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [current]);

  return (
    <div className=" overflow-hidden relative">
        <div className="w-max h-[100vh] flex transition-all ease-in-out duration-700"
          style={{transform: `translateX(-${current * 100}vw)` }}
        >
          {Slides.map((slide, index) => (
            <div key={slide.id} className="w-screen h-full relative">

              {/* CONTAINER */}
              <div className="w-full ">
                <Image src={slide.image} alt="" fill sizes="100%" className="object-cover" />
              </div>
              {/* TEXT CONTAINER */}
              <div className="text-center py-4 px-4 md:px-6 m-auto absolute left-0 top-0 bottom-0 right-0 z-10 bg-gradient-to-t from-white/90 to-white/10 flex flex-col items-center justify-center gap-2 lg:gap-6 xl:gap-8">
                <h1 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-semibold">{slide.title}</h1>
                <h2 className=" pb-8 text-gray-800 text-lg md:text-xl lg:text-2xl 2xl:text-4xl">{slide.content}</h2>
                <p className="text-md text-gray-700 lg:text-lg 2xl:text-xl">{slide.description}</p>
              </div>
            </div>  
            ))}
        </div>
        <div className="absolute z-10 bottom-8 m-auto left-0 right-0 flex justify-center gap-4 ">

        {
          Slides.map((slide, index) => (
            <div className={` w-3 h-3 cursor-pointer rounded-full ring-1 flex items-center justify-center ${current === index ? "scale-150 ring-red-600" : "ring-gray-600"}`} key={slide.id}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px]  bg-red-600 rounded-full"></div>
              )}
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Slider