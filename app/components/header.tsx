import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "./pages"

export default function Header() {
  const page = usePathname()
  return (
    <>
    {/* <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 justify-center text-center w-full py-4 uppercase bg-transparent bg-opacity-0'>
      {pages.map((page) => (
        <Link key={page.href} href={page.href} className="hover:-translate-y-1 transition-transform p-2">
          {page.name}
        </Link>
      ))}
    </div> */}
    <div className='flex flex-row justify-evenly text-center w-full py-4 uppercase bg-transparent bg-opacity-0 text-sm'>
      {pages.map((page) => (
        <Link key={page.href} href={page.href} className="hover:-translate-y-1 transition-transform p-2">
          {page.name}
        </Link>
      ))}
    </div>
    </>
  );
}
