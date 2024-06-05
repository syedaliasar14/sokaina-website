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

export default function HomeHeader() {
  return (
    <div className="flex flex-col uppercase text-sm">
      {pages.map((page) => (
        <Link key={page.href} href={page.href}
          className="p-2 hover:-translate-y-1 transition-transform">
          {page.name}
        </Link>
      ))}
    </div>
  );
}
