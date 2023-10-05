import Link from "next/link";

interface TimeLineElementProps {
  children: any;
  name: string;
  year: string;
  img: string;
}

const TimeLineElement: React.FC<TimeLineElementProps> = ({
  children,
  name,
  year,
  img,
}) => {
  return <div>{children}</div>;
};

const JourneyPage = () => {
  return (
    <div className="w-full h-full min-h-screen relative">
      <div className="w-[80%] mx-auto my-20">
        <nav className="w-full flex flex-row justify-center px-20  mb-12 text-xl italic underline lowercase">
          <Link href="/">Home</Link>
        </nav>
        <div className="w-full p-20 outline outline-2 outline-black">
          <h1 className="font-bold text-4xl mb-12 text-center mt-12 ">
            Amelia Morek - My journey
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
