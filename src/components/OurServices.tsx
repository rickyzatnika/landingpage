"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface SServices {
  _id: string;
  title: string;
  desc: string;
  image: string;
}

const OurServices = () => {
  const [services, setServices] = useState<SServices[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("/api/services");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.log(error);
        setError(
          "`Sorry, Failed to fetch data services. Try to refresh the page.`"
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="w-full py-8 px-4 md:px-12 xl:px-16 2xl:px-20">
      <div className="flex gap-1 md:gap-3 py-6 md:py-10 ">
        <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#d2ee7f]">
          Our
        </h1>
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold border-b-2 border-b-[#bfee32] pb-1 text-gray-800">
          Services
        </h2>
      </div>
      {error && <p className="text-[#d2ee7f] py-8">{error}</p>}
      {isLoading ? (
        <p className="text-md text-gray-600">Loading data ...</p>
      ) : (
        <div className="w-full flex flex-col md:flex-row gap-12">
          {services?.map((service) => (
            <div
              key={service?._id}
              className="w-full flex flex-col md:flex-row gap-4 "
            >
              <div className="w-full md:w-3/4 mx-auto text-justify ">
                <Image
                  width={500}
                  height={500}
                  quality={80}
                  priority={true}
                  src={service?.image}
                  alt=""
                  className="w-full object-cover rounded-md"
                />
                <h3 className="text-lg md:text-xl  text-gray-500 pt-5">
                  {service?.title}
                </h3>
                <p className="text-gray-400 text-md py-4">{service?.desc}</p>
                <div className="py-4">
                  <Link
                    href={`/services/${service?._id}`}
                    className="hover:text-[#d2ee7f]  hover:bg-white text-gray-500 bg-[#d2ee7f] transition-all ease-linear duration-150 text-md px-3  border shadow-md hover:shadow-sm  py-2 rounded-md "
                  >
                    Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurServices;
