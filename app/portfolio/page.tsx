import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/Header";
import { projects } from "./projects";

export default function Portfolio() {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full max-w-7xl flex-grow px-8 md:px-16">
        <h1 className="text-3xl md:text-4xl tracking-widest my-8">PORTFOLIO</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col items-start">
              <Link href={`/portfolio/${project.id}`} className="relative flex flex-col items-start text-center">
                <img src="/home-bg.jpg" alt={project.title} className="w-full aspect-square object-cover hover:scale-105 transition-all duration-300" />
                <div className="absolute inset-0 p-2 bg-black/50 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 uppercase">
                  <h2 className="text-xl">{project.id}</h2>
                  <h3 className="text-2xl md:text-4xl font-bold mt-8 md:mt-12">{project.title}</h3>
                  <p className="text-sm md:text-lg mt-4 mb-8 md:mb-12">{project.subtitle}</p>
                </div>
              </Link>
              <h2 className="text-2xl">{project.id}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}