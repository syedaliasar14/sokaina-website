import Image from "next/image";
import HomeHeader from "./components/homeheader";

export default function Home() {
  return (
    <main className="relative flex flex-grow overflow-hidden justify-center py-8 px-4 sm:px-8 sm:py-4 w-screen h-full text-white">
      <Image
        className="object-cover"
        src={"/home.jpg"}
        alt="home"
        fill
      />
      <div className="relative flex flex-col items-center w-full">
        <div className="self-end text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl text-right pt-4">
          sokaina asar
        </div>
        <div className="self-start pt-20">
          <HomeHeader/>
        </div>
      </div>
    </main>
  );
}
