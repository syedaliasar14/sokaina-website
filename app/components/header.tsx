import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Home", href: "/" },
  { name: "Fine Art", href: "/fineart" },
  { name: "Architecture", href: "/architecture" },
  /* { name: "Neuroscience", href: "/neuroscience" }, */
  /* { name: "Neuroaesthetics Blog", href: "/blog" }, */
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export default function Header() {
  const page = usePathname()
  return (
    <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 justify-center text-center w-full py-4 uppercase bg-transparent ${page === '/contact' &&'text-white'}`}>
      {pages.map((page) => (
        <Link key={page.href} href={page.href} className="hover:-translate-y-1 transition-transform p-2">
          {page.name}
        </Link>
      ))}
    </div>
  );
}
