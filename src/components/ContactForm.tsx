"use client";

import React, { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContactForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      return toast.error("Form is not valid");
    }

    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_PRO}/api/contact`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
        }),
      });
      if (!res.ok) {
        throw new Error("Error occured!");
      }
      await res.json();

      const setTimeoutId = setTimeout(() => {
        setLoading(false);
        toast.success("Sent Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setName("");
        setEmail("");
        setPhone("");
      }, 3000);

      return () => clearTimeout(setTimeoutId);
    } catch (err) {
      toast.error("Error Occured");
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full py-16 px-2 md:px-12 xl:px-16 2xl:px-20">
      <h1 className="text-center text-2xl md:text-4xl text-gray-700 py-6 border-b border-red-500">
        Our <span className="text-red-600 font-semibold">Contacts</span>
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 px-2 pt-12">
        {/* INFO */}
        <div className="w-full flex flex-col">
          <div className="">
            <p className="text-red-500 text-md uppercase md:text-xl pb-2 md:pb-8">
              01/Get In Touch
            </p>
            <p className="text-gray-500 text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-full py-8 px-2 md:px-4 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 p-2 text-white rounded-3xl">
                <FaPhoneAlt size={24} />
              </div>
              <p className="text-gray-600 text-sm md:text-md">0821222222222</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-red-500 p-2 text-white rounded-3xl">
                <MdMarkEmailRead size={24} />
              </div>
              <p className="text-gray-600 text-sm md:text-md">
                support@acdanfurniture.id
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-red-500 p-2 text-white rounded-3xl">
                <FaMapMarkerAlt size={24} />
              </div>
              <p className="text-gray-600 text-sm md:text-md">
                Jl. Raya Sarijadi - Kota Bandung, Jawa-Barat 40559
              </p>
            </div>
          </div>
        </div>

        {/* FORMSUBMIT */}
        <div className="flex flex-col gap-8 w-full">
          <p className="text-red-500 uppercase text-md md:text-xl pb-2 md:pb-8">
            02/Send us A Message
          </p>
          <form
            onSubmit={handleContactForm}
            className="w-full py-8 px-2 md:px-4 bg-zinc-50  shadow-md"
          >
            <div className=" px-1 md:px-4">
              <div className="flex flex-col  gap-2">
                <label className="text-md text-gray-600">Nama Lengkap :</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="john doe"
                  className="shadow-md placeholder:text-sm text-gray-600 placeholder:text-gray-400 px-2 md:px-6 py-3 w-full outline-none border-none bg-zinc-50 focus:border-none focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 py-2 lg:py-6">
                <label className="text-md text-gray-600">Email :</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="john@gmail.com"
                  className="shadow-md placeholder:text-sm text-gray-600 placeholder:text-gray-400 px-2 md:px-6 py-3 w-full outline-none border-none bg-zinc-50 focus:border-none focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-md text-gray-600">No. Handphone :</label>
                <input
                  value={phone}
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="masukkan no.handphone"
                  className="shadow-md bg-zinc-50 placeholder:text-sm text-gray-600 placeholder:text-gray-400 w-full focus:outline-none focus:border-none px-2 md:px-6 py-2"
                />
              </div>
            </div>
            <button
              type="submit"
              className=" px-4 py-2 w-full md:w-24 flex items-center justify-center m-auto  my-4 text-zinc-200 hover:text-white shadow-md bg-red-500 hover:bg-red-600 rounded-md "
            >
              {!loading ? <span>Kirim</span> : <span>Loading..</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
