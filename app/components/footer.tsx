import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <nav className="relative w-full mt-24 text-white pt-18 pb-8 px-8 ">
      <Image
        className="object-cover brightness-50 saturate-25 contrast-150 sepia-50 z-[-1]"
        src={"/home-bg.jpg"}
        alt="home"
        fill
      />
      <div className="flex justify-between flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col justify-center gap-4 text-center md:text-left">
          <Link href="/" className="text-xl">sokainaasar.com</Link>
          <div className="flex flex-col justify-center gap-2">
            <Link href="/portfolio" className="text-sm">PORTFOLIO</Link>
            <Link href="/about" className="text-sm">ABOUT</Link>
            <Link href="/contact" className="text-sm">CONTACT</Link>
          </div>
        </div>
        <div className="flex flex-row md:self-end gap-4">
          <Link href="mailto:sasar@pratt.edu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </Link>
          <Link href="tel:8608195273">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  )
}