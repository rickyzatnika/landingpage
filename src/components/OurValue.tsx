import { RiDashboard3Line } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { Ri24HoursLine } from "react-icons/ri";
import { FaClockRotateLeft } from "react-icons/fa6";



const values = [
  {
    id:1,
    title: "STAF BERKUALITAS TINGGI",
    desc: "Tenaga ahli profesional yang handal, dapat dipercaya, dan menjamin kenyamanan pelanggan",
    icon: <RiDashboard3Line size={30}/>,
  },
  {
    id:2,
    title: "CEPAT TANGGAP & EFISIEN",
    desc: "Tenaga profesional dengan pengerjaan cepat, responsif dan akurat.",
    icon: <FaClockRotateLeft size={30} />,
  },
  {
    id:3,
    title: "LAYANAN BERKUALIAS",
    desc: "Biaya servis yang terjangkau dengan kualitas dan pelayanan terbaik untuk memenuhi kebutuhan Anda.",
    icon: <GrServices size={30} />,
  },
  {
    id:4,
    title: "SUPPORT 24 JAM",
    desc: "Pelayanan 24 jam untuk memastikan Anda mendapatkan bantuan kapan saja Anda membutuhkannya.",
    icon: <Ri24HoursLine size={30} />,
  },
]


const OurValue = () => {
  return (
    <div className="w-full py-8 md:py-14 px-4 md:px-28 xl:px-32 2xl:px-44">
        <h3 className="pb-8 text-sm sm:text-lg md:text-xl text-gray-700">Alasan mengapa Bekerja sama dengan kami ?</h3>
        <div className="flex flex-col md:flex-row gap-4 w-full">
            {values.map(value => (
              <div key={value.id} className=" bg-white w-full shadow-md rounded-lg py-8 flex flex-col gap-2 items-center justify-center">
                <div className="bg-white shadow-md p-4 rounded-full w-fit text-red-600">
                  {value.icon}
                </div>
                <div className="text-center mt-2 w-fit px-4 ">
                  <h2 className="text-md font-semibold text-gray-700">{value.title}</h2>
                  <p className="text-sm leading-relaxed pt-2 text-gray-500">
                    {value.desc}
                  </p>
                </div>
            </div> 
            ))} 
        </div>
    </div>
  )
}

export default OurValue