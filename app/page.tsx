import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center flex-grow text-white w-full px-8">
      <Image
        className="object-cover brightness-65 saturate-25 contrast-150 sepia-50"
        src={"/home-bg.jpg"}
        alt="home"
        fill
      />
      <div className="relative flex flex-col items-center w-max text-center">
        <div className="border border-white text-3xl md:text-5xl font-medium tracking-widest w-full md:w-[75vw] px-8 md:px-16 py-8 md:py-12">
          SOKAINA ASAR
        </div>
        <nav className="pt-12 flex flex-col md:flex-row gap-4 justify-around w-full tracking-widest font-semibold text-sm md:text-md">
          <Link href="/portfolio">PORTFOLIO</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </div>
    </main>
  );
}
