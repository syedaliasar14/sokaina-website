"use client"

import PageTitle from "../components/pagetitle";
import Image from "next/image";
import Header from "../components/header";
import ContactForm from "./contactform";

export default function Contact() {
  return (
    <main className="relative flex flex-col flex-grow items-center w-full h-full text-white">
      <Image
        className="absolute object-cover"
        src={"/home.jpg"}
        alt="home"
        fill
      />
      <div className="relative w-full">
        <Header/>
      </div>
      <div className="relative flex flex-col sm:flex-row items-center justify-center py-8 px-6 sm:px-8 sm:py-4 w-full">
        <div className="w-full">
          <PageTitle title="Contact" />
          <ContactForm />
        </div>
        <div className="flex flex-col w-full gap-8 font-semibold text-sm px-10 pt-20 text-center sm:text-left self-end">
          <div>
            <p>BASED IN</p>
            <p>Brooklyn, NY</p>
          </div>
          <div>
            <p>EMAIL ADDRESS</p>
            <p>sasar@pratt.edu</p>
          </div>
          <div>
            <p>PHONE NUMBER</p>
            <p>860-819-5273</p>
          </div>
          <div>
            <p>INSTAGRAM</p>
            <p>@lowkeysoki</p>
          </div>
        </div>
      </div>
    </main>
  );
}