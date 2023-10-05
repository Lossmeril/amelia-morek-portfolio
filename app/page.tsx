"use client";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import Image from "next/image";
import FeaturedProjectCard from "@/components/featuredProjectCard";
import Link from "next/link";

export default function Home() {
  return (
    /*  MADE WITH MINIMALISM, REACT AND LOVE  */
    <div className="w-full h-full min-h-screen grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2">
      <div className="w-full h-full relative p-12 xl:p-[10%] xl:pl-[15%] xl:pt-[7%] outline-black outline outline-1">
        <div className="mt-[50%] md:mt-0">
          <div className="z-20">
            <p className="text-xl">Hi, I am </p>
            <h1 className="font-bold text-4xl">Amelia Roża Morek</h1>
          </div>
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[350px] xl:h-[350px] absolute translate-x-[50%] xl:translate-x-[80%] translate-y-[65%] md:translate-y-10 xl:-translate-y-20 -z-10">
            <Image
              fill
              alt="Amelia Morek"
              src="/img/amelia.jpg"
              className="object-cover"
            />
          </div>
          <div className="z-20 mt-12">
            <p className="text-xl italic">mixed media artist</p>
            <p className="text-xl italic">filmmaker</p>
            <p className="text-xl italic">student</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative p-[10%] outline-black outline outline-1">
        <ul className="list-none italic text-3xl text-center underline centered-absolute">
          <Link href="/journey">
            <li className="mb-5">my journey</li>
          </Link>
          <li className="mb-5">works</li>
          <li className="mb-5">films</li>
          <li className="mb-5">writing</li>
        </ul>
      </div>
      <div className="w-full h-screen md:h-full relative outline-black outline outline-1">
        <div className="w-full h-full grid grid-rows-2 xl:grid-rows-1 grid-cols-1 xl:grid-cols-2">
          <FeaturedProjectCard
            imgSrc="/img/lrad.jpg"
            title="Like Real Adults Do"
            type="short film"
            year="2023"
          />
          <FeaturedProjectCard
            imgSrc="/img/lrad.jpg"
            title="Like Real Adults Do"
            type="short film"
            year="2023"
          />
        </div>
      </div>
      <div className="w-full h-full relative p-[10%] outline-black outline outline-1">
        <div className="centered-absolute">
          <h2 className="italics text-center text-3xl lowercase font-bold mb-8">
            Contact me
          </h2>
          <ul className="list-none italic font-medium text-xl text-center">
            <li className="mb-5">amelia@morek.art</li>
            <li className="mb-5">+44 123 456 789</li>
          </ul>
          <div className="flex flex-row justify-center gap-12 pt-5">
            <BsInstagram size={25} />
            <BsLinkedin size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
