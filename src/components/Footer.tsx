import Link from "next/link";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full relative z-10 flex flex-col  items-center justify-between ">
      <div className="w-full flex flex-col md:flex-row  gap-8 bg-slate-50 px-4 md:px-12 xl:px-16 2xl:px-20 py-14">
        <div className="flex flex-col flex-1">
          <Link className="text-2xl text-gray-600" href="/">
            Logo
          </Link>
          {/* <Image src="/logo.png" alt='logo_aplus' width={100} height={100} className='object-cover ' /> */}
          <p className="w-full md:w-96 pt-4  text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            quo?
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <span className=" text-gray-600 font-semibold mb-2">Support</span>

          <div className="flex gap-2 items-center text-gray-400 text-sm">
            <FaPhoneSquareAlt size={20} />
            <span>085xxxxxx</span>
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-sm">
            <AiOutlineMail size={20} />
            <span>support@acdanfurniture.id</span>
          </div>
          <div className="flex gap-2 items-center text-gray-400 text-sm">
            <BiSolidMap size={20} />
            <span>
              Jl. Raya Sarijadi - <br /> Kota Bandung, Jawa-Barat 40559
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <span className=" text-gray-600 font-semibold">Company</span>
          <Link href="/about" className="text-gray-400 text-sm">
            About
          </Link>
          <Link href="/services" className="text-gray-400 text-sm">
            Services
          </Link>
          <Link href="/contact" className="text-gray-400 text-sm">
            Contact
          </Link>
          <Link
            href="https://tawk.to/chat/669ee2b632dca6db2cb3b01c/1i3eab6al"
            target="_blank"
            className="text-gray-400 text-sm"
          >
            Live Chat
          </Link>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <span className="text-gray-600 font-semibold">Connect</span>
          <form className="flex flex-col md:flex-row w-full md:w-72">
            <input
              required
              className="shadow border-none placeholder:text-sm placeholder:text-gray-300 text-gray-500 outline-none py-2 px-2 rounded-md text-sm"
              type="email"
              placeholder="Masukkan Email"
            />
            <button
              className="bg-[#d2ee7f] hover:bg-[#c2e45e] text-gray-800 shadow rounded-md py-2 px-4  text-sm "
              type="submit"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
      <p className="w-full gap-5 py-2 text-sm text-center bg-[#a8ca41]  text-gray-800 ">
        © 2024 All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
