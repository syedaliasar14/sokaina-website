import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "./pages"
import { IoMenuOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // sm breakpoint in Tailwind is 640px
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
    
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    {/* <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 justify-center text-center w-full py-4 uppercase bg-transparent bg-opacity-0'>
      {pages.map((page) => (
        <Link key={page.href} href={page.href} className="hover:-translate-y-1 transition-transform p-2">
          {page.name}
        </Link>
      ))}
    </div> */}
    {isSmallScreen ? (
      <div className="flex self-start">
        <IoMenuOutline 
          className="m-4 text-2xl cursor-pointer left-0"
          onClick={toggleMenu}
        />
        {menuOpen && (
          <div className="fixed left-0 w-48 bg-white shadow-xl z-20 h-screen uppercase">
            <IoMenuOutline 
              className="m-4 text-2xl cursor-pointer left-0 text-black"
              onClick={toggleMenu}
            />
            {pages.map((page) => (
              <Link 
                className="block px-4 py-2 text-gray-800 text-sm hover:bg-gray-100"
                key={page.href}
                href={page.href}
                onClick={toggleMenu}
              >
                {page.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    ) : (
      <div className='flex flex-row justify-evenly text-center w-full py-4 uppercase bg-transparent bg-opacity-0 text-sm'>
        {pages.map((page) => (
          <Link key={page.href} href={page.href} className="hover:-translate-y-1 transition-transform p-2">
            {page.name}
          </Link>
        ))}
      </div>
    )}
    </>
  );
}
