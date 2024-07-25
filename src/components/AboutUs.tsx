import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full py-14 px-4 md:px-12 xl:px-16 2xl:px-20">
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 flex flex-col flex-1 justify-center items-center ">
          <div className="relative z-10">
            <div className="absolute w-full h-full rounded-xl top-1 left-1 -z-10 bg-[#d2ee7f] shadow-md shadow-gray-300" />

            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2Zlc3Npb25hbCUyMGhhbmRzY2xhZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              width={320}
              height={320}
              priority
              className="w-80 object-cover rounded-xl"
            />
          </div>
          <p className="text-sm text-gray-500 italic pt-2">
            Mr. Dadang OnTheWay{" "}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex-1 ">
          {/* <div className="py-3">
            <p className="text-md leading-relaxed text-gray-500 py-3">
              Sebagai seorang pengusaha yang berdedikasi dan berpengalaman, Kami
              telah berhasil mengembangkan dua usaha yang bergerak di bidang
              jasa service AC dan pembuatan furniture. Dengan latar belakang
              pendidikan yang kuat dan pengalaman bertahun-tahun di industri,
              kami memadukan pengetahuan teknis dengan keterampilan manajemen
              untuk memberikan layanan terbaik kepada pelanggan.
            </p>
          </div> */}
          <div className="py-3">
            <h3 className="text-lg text-gray-700 font-semibold py-2">
              Jasa Service AC
            </h3>
            <p className="text-md leading-relaxed text-gray-500 py-3">
              Di bawah kepemimpinan Mr. Dadang, usaha jasa service AC telah
              berkembang pesat dan dikenal luas karena kehandalan dan
              profesionalisme. Dengan tim teknisi yang terlatih dan berkompeten,
              kami memastikan setiap pekerjaan dilakukan dengan tepat waktu dan
              sesuai standar tertinggi. Kami menawarkan berbagai layanan mulai
              dari perawatan rutin, perbaikan, hingga instalasi AC baru, dengan
              tujuan utama memberikan kenyamanan dan efisiensi bagi setiap
              pelanggan.
            </p>
          </div>
          <div className="py-3">
            <h3 className="text-lg text-gray-700 font-semibold py-2">
              Pembuatan Furniture
            </h3>
            <p className="text-md leading-relaxed text-gray-500 py-3">
              Menggabungkan seni dan keahlian teknis, usaha pembuatan furniture
              kami menghadirkan produk-produk berkualitas tinggi yang dirancang
              untuk memenuhi kebutuhan estetika dan fungsional. Kami selalu
              berinovasi dalam desain dan bahan, memastikan setiap furniture
              yang dihasilkan memiliki daya tahan dan keindahan yang tak
              tertandingi. Kami melayani berbagai kebutuhan, baik untuk rumah
              tangga, kantor, maupun proyek komersial, dengan fokus pada
              kepuasan pelanggan dan kualitas produk.
            </p>
          </div>
          <Link
            className="hover:text-[#a8ca41]  hover:bg-white text-white bg-[#d2ee7f] transition-all ease-linear duration-150 text-md px-3  border shadow-md hover:shadow-sm  py-2 rounded-md"
            href="/about"
          >
            Tentang Kami
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
