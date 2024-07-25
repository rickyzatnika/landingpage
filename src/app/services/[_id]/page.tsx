import BackToPage from "@/components/BackToPage";
import Image from "next/image";
import Link from "next/link";

const getData = async (_id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PRO}/api/services/${_id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data for id ${_id}`);
  }

  return res.json();
};

const GetDetailPage = async ({ params }: { params: { _id: string } }) => {
  const { _id } = params;

  const post = await getData(_id);

  return (
    <div className="w-full h-full py-28 px-4 md:px-12 xl:px-16 2xl:px-20 relative ">
      <div className="hidden md:inline-block">
        <Link className="text-xs text-gray-500" href="/">
          home/
        </Link>
        <Link className="text-xs text-gray-500" href="/services">
          services/
        </Link>
        <span className="text-xs text-gray-500">{post?.services?._id}</span>
      </div>
      <div className="w-full h-full flex items-center justify-center flex-col gap-6 relative">
        <h1 className="text-xl md:text-3xl lg:text-4xl text-[#a8ca41]">
          {post?.services?.title}
        </h1>

        <Image
          src={post?.services?.image}
          alt={post?.services?.title}
          priority={true}
          width={500}
          height={384}
          quality={80}
        />

        <p className="text-md w-full md:w-7/12 mx-auto text-center leading-relaxed">
          {post?.services?.desc}
        </p>
      </div>
      <BackToPage />
    </div>
  );
};

export default GetDetailPage;
