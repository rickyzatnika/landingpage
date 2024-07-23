import Image from "next/image"
import Link from "next/link"




const services = [
  {
    id: 1,
    title: 'Service AC',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci vel ligula mattis pul",
    image: "https://plus.unsplash.com/premium_photo-1661315526732-271aa84f480d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUN8ZW58MHx8MHx8fDA%3D",
    url: "/services"
  },
  {
    id: 2,
    title: 'Furniture',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci vel ligula mattis pul",
    image: "https://plus.unsplash.com/premium_photo-1678402545080-2353b489c0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    url: "/services"
  },
  {
    id: 3,
    title: 'Lorem3',
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci vel ligula mattis pul",
    image: "https://plus.unsplash.com/premium_photo-1661315526732-271aa84f480d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUN8ZW58MHx8MHx8fDA%3D",
    url: "/services"
  },
]


const OurServices = () => {
  return (
    <div className='w-full py-8 px-4 md:px-12 xl:px-16 2xl:px-20'>
        <div className='flex gap-1 md:gap-3 py-4'>
            <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-600'>Our</h1>
            <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold border-b border-b-red-600 pb-1 text-gray-800'>Services</h2>
        </div>
        <div className="w-full flex flex-col md:flex-row ">
          {services.map((service) => (
           
              <div key={service.id} className='w-full flex flex-col md:flex-row gap-4 '>
                <div className='w-full md:w-3/4 mx-auto text-justify '>
                  <h3 className='text-xl md:text-lg font-semibold text-gray-600 py-4'>{service.title}</h3>
                  <Image width={100} height={100}  src={service.image} alt='' className='w-full object-cover rounded-md' />
                  <div className='py-8'> 
                    <p className='text-gray-500 text-sm  pb-3'>{service.desc}</p>
                    <Link href={service.url} className='text-red-600 hover:text-white hover:bg-red-600 transition-all ease-linear duration-150 text-xs border rounded-md border-red-500 px-3 py-1'>Selengkapnya</Link>
                  </div>
                </div>
              </div>
          ))}
        </div>
    </div>
  )
}

export default OurServices