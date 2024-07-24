"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const GetDetailPage = ({
  params,
}: {
  params: { id: string; title: string };
}) => {
  const [data, setData] = useState({ title: "", desc: "", image: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PRO}/api/services/${params.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const service = await response.json();
        console.log(service);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <div className="w-full h-full pt-24">
      {/* <h1 className="text-2xl text-red-600">{e}</h1>
      <Image
        src={}
        alt=""
        width={100}
        height={100}
        className="object-cover"
      />
      <p>{}</p> */}
      {params?.id}
      {params?.title}
    </div>
  );
};

export default GetDetailPage;
