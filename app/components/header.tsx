import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-end w-full p-4">
      <Link href="/" className="text-xl px-3 hover:-translate-y-1 transition-transform">Home</Link>
      <Link href="/portfolio" className="text-xl px-3 hover:-translate-y-1 transition-transform">Portfolio</Link>
      <Link href="/contact" className="text-xl px-3 hover:-translate-y-1 transition-transform">Contact</Link>
    </div>
  );
}