import Link from "next/link";
import { pages } from "./pages"

export default function HomeHeader() {
  return (
    <div className="flex flex-col uppercase text-sm">
      {pages.map((page) => (
        <Link key={page.href} href={page.href}
          className="px-2 py-4 sm:py-2 hover:-translate-y-1 transition-transform">
          {page.name}
        </Link>
      ))}
    </div>
  );
}
