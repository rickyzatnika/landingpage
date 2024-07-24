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
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PRO}/api/services`
        );
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
      <div className="flex gap-1 md:gap-3 py-4">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-600">
          Our
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold border-b border-b-red-600 pb-1 text-gray-800">
          Services
        </h2>
      </div>
      {error && <p className="text-red-600 py-8">{error}</p>}
      {isLoading ? (
        <p className="text-md text-gray-600">Loading data ...</p>
      ) : (
        <div className="w-full flex flex-col md:flex-row ">
          {services?.map((service) => (
            <div
              key={service?._id}
              className="w-full flex flex-col md:flex-row gap-4 "
            >
              <div className="w-full md:w-3/4 mx-auto text-justify ">
                <h3 className="text-xl md:text-lg font-semibold text-gray-600 py-4">
                  {service?.title}
                </h3>
                <Image
                  width={100}
                  height={100}
                  src={service?.image}
                  alt=""
                  className="w-full object-cover rounded-md"
                />
                <div className="py-8">
                  <p className="text-gray-500 text-sm  pb-3">{service?.desc}</p>
                  <Link
                    href={`/services/${service?._id}`}
                    className="text-red-600 hover:text-white hover:bg-red-600 transition-all ease-linear duration-150 text-xs border rounded-md border-red-500 px-3 py-1"
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
