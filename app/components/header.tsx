import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex flex-row justify-around w-full tracking-widest text-sm md:text-md uppercase py-12">
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}