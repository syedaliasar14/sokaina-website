import Image from "next/image";
import HomeHeader from "./components/homeheader";

export default function Home() {
  return (
    <main className="relative flex flex-row flex-grow overflow-hidden items-center justify-between p-24 w-screen h-full text-white">
      <Image
        className="object-cover"
        src={"/home.jpg"}
        alt="home"
        fill
      />
      <div className="relative self-start pt-8">
        <HomeHeader/>
      </div>
      <div className="relative self-start text-7xl">sokaina asar</div>
    </main>
  );
}
