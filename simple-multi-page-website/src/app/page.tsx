import Image from "next/image";
import Cards from "../components/Cards";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 bg-white px-10 pt-4 rounded-2xl shadow-lg border-2 border-gray-100">
      <h1 className="text-4xl font-normal text-center">Welcome to My Next.js App</h1>
      <p className="text-center my-4 text-lg">This is a simple, clean website built with Next.js and Tailwind CSS.</p>
      <div className="flex w-full justify-center items-center pb-4">
        <button className="bg-blue-500 hover:cursor-pointer hover:scale-105 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
          Get Started
        </button>
        <button className="text-gray-400 hover:cursor-pointer hover:scale-105 transition-all border-2 border-gray-100 font-normal py-2 px-4 rounded-lg ml-4">
          Learn More
        </button>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-6">
        <Cards title="Fast" description="Built with next js for optimal performance." imagebgcolor="bg-blue-50" imageborder="border-blue-400" imageUrl="/thunder.svg" link="/card1" />
        <Cards title="Simple" description="Designed to be easy to use." imagebgcolor="bg-green-50" imageborder="border-green-400" imageUrl="/friendly.svg" link="/card2" />
        <Cards title="Responsive" description="Looks great on all devices." imagebgcolor="bg-yellow-50" imageborder="border-yellow-400" imageUrl="/feature.svg" link="/card3" />
      </div>
    </div>
  );
}
