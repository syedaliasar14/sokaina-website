import Link from "next/link";

const pages = [
  { name: "Home", href: "/" },
  { name: "Fine Art", href: "/fineart" },
  { name: "Architecture", href: "/architecture" },
  { name: "Neuroscience", href: "/neuroscience" },
  { name: "Neuroaesthetics Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export default function Header() {
  return (
    <div className="flex flex-row justify-evenly w-full py-4 uppercase">
      {pages.map((page) => (
        <Link key={page.href} href={page.href} className="hover:-translate-y-1 transition-transform">
          {page.name}
        </Link>
      ))}
    </div>
  );
}
