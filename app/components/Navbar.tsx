import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const svgString = useMemo(() => {
    const color = "currentColor";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="logo" width={35} height={35} />
              <h1 className="font-minecraft-bold ml-2 text-2xl">RetroUI</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/installation"
              className="font-minecraft hover:text-gray-600 px-3 py-2 rounded-md"
            >
              Installation
            </Link>
            <Link
              href="/components"
              className="font-minecraft hover:text-gray-600 px-3 py-2 rounded-md"
            >
              Components
            </Link>
            <a
              href="https://github.com/Dksie09/RetroUI"
              target="_blank"
              rel="noopener noreferrer"
              className="font-minecraft hover:text-gray-600 px-3 py-2 rounded-md text-sm flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="mr-2"
              >
                <path d="M21 5L20 5 19 5 19 3 18 3 17 3 15 3 15 5 14 5 13 5 13 8 12 8 11 8 11 6 11 5 9 5 9 3 7 3 6 3 5 3 5 5 3 5 3 14 5 14 5 16 7 16 7 18 10 18 10 21 12 21 14 21 14 18 17 18 17 16 19 16 19 14 21 14z"></path>
              </svg>
              Star the repo
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-900 focus:outline-none ${
                isMenuOpen ? "" : ""
              }`}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 5L20 5 19 5 19 3 18 3 17 3 15 3 15 5 14 5 13 5 13 8 12 8 11 8 11 6 11 5 9 5 9 3 7 3 6 3 5 3 5 5 3 5 3 14 5 14 5 16 7 16 7 18 10 18 10 21 12 21 14 21 14 18 17 18 17 16 19 16 19 14 21 14z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute right-0 mt-2 w-48">
          <div className="bg-white inline-block w-full">
            <div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              style={{
                borderImage: svgString,
                borderImageSlice: "2",
                borderImageRepeat: "round",
                borderWidth: "6px",
                borderStyle: "solid",
              }}
            >
              <Link
                href="/installation"
                className="font-minecraft block hover:text-gray-600 px-3 py-2 rounded-md text-base whitespace-nowrap"
              >
                Installation
              </Link>
              <Link
                href="/components"
                className="font-minecraft block hover:text-gray-600 px-3 py-2 rounded-md text-base whitespace-nowrap"
              >
                Components
              </Link>
              <a
                href="https://github.com/Dksie09/RetroUI"
                target="_blank"
                rel="noopener noreferrer"
                className="font-minecraft block hover:text-gray-600 px-3 py-2 rounded-md text-base flex items-center whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path d="M21 5L20 5 19 5 19 3 18 3 17 3 15 3 15 5 14 5 13 5 13 8 12 8 11 8 11 6 11 5 9 5 9 3 7 3 6 3 5 3 5 5 3 5 3 14 5 14 5 16 7 16 7 18 10 18 10 21 12 21 14 21 14 18 17 18 17 16 19 16 19 14 21 14z"></path>
                </svg>
                Star Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
