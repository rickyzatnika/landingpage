"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackToPage = () => {
  const router = useRouter();

  return (
    <button
      className="w-fit text-sm transition-all ease-linear duration-100 flex items-start justify-center mx-auto py-2 px-4 bg-[#a8ca41] hover:bg-[#94b630] text-gray-50 my-6 rounded-lg"
      onClick={() => router.push("/")}
    >
      homepage
    </button>
  );
};

export default BackToPage;
