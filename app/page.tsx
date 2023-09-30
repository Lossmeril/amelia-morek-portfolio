import { BsLinkedin, BsInstagram } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  return (
    /*  MADE WITH MINIMALISM, REACT AND LOVE  */
    <main className="">
      <div className="w-full h-full min-h-screen grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2">
        <div className="w-full h-full relative p-[10%] outline-black outline outline-1">
          <div className="">
            <div className="z-20">
              <p className="text-xl">Hi, I am </p>
              <h1 className="font-bold text-4xl">Amelia Roża Morek</h1>
            </div>
            <Image
              width={350}
              height={350}
              alt="Amelia Morek"
              src="/img/amelia.jpg"
              className="absolute translate-x-[80%] -translate-y-20 -z-10"
            />
            <div className="z-20 mt-12">
              <p className="text-xl italic">mixed media artist</p>
              <p className="text-xl italic">filmmaker</p>
              <p className="text-xl italic">student</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative p-[10%] outline-black outline outline-1">
          <ul className="list-none italic text-3xl text-center underline centered-absolute">
            <li className="mb-5">works</li>
            <li className="mb-5">films</li>
            <li className="mb-5">writing</li>
          </ul>
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
        <div className="w-full h-full relative outline-black outline outline-1">
          <div className="h-[15%] relative">
            <h2 className="italics text-center text-3xl lowercase font-bold centered-absolute">
              Featured projects:
            </h2>
          </div>
          <div className="w-full h-[85%] grid grid-rows-1 grid-cols-2">
            <div
              className="overflow-hidden ml-10 my-5 mr-3"
              style={{
                backgroundImage: "url(/img/lrad.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="overflow-hidden mr-10 my-5 ml-3"
              style={{
                backgroundImage: "url(/img/lrad.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
