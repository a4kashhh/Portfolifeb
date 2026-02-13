"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Comp, { openSans, anton } from "../NavbarComponents/comp";
import gsap from "gsap";

function Navbar({homeRef, aboutRef, workRef}: any) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickHome = () => {
    if (homeRef?.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    }
    setIsMenuOpen(false);
  };

  const handleClickAbout = () => {
    if (aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    }
    setIsMenuOpen(false);
  };

  const handleClickWork = () => {
    if (workRef?.current) {
      workRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="md:mx-12 mx-2 mt-3 flex justify-between items-center select-none">
        <Image src="/icons/logoIcon.png" width={160} height={100} className="md:w-[160px] md:h-[100px] h-[80px] w-[140px]" alt="" />
        
        {/* Desktop Navbar */}
        <div className="bar md:block hidden">
          <Comp homeRef={homeRef} aboutRef={aboutRef} workRef={workRef} />
        </div>

        {/* Mobile Menu Button + Valentine */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="https://valentine.a4kashhh.in" target="_blank">
            <button
              className="px-3 py-1.5 rounded-full text-white text-xs bg-gradient-to-r from-pink-500 to-red-500 hover:scale-[105%] active:scale-95 transition-all duration-300 ease-in-out animate-pulse"
            >
              💝
            </button>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-black text-[#b2de21]"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-24 left-0 right-0 bg-white/95 backdrop-blur-md z-50 p-4 mx-2 rounded-2xl shadow-lg border border-gray-200">
          <div className={`${anton.className} flex flex-col gap-3`}>
            <button
              onClick={handleClickHome}
              className="px-4 py-3 rounded-full text-[#b2de21] bg-black text-left"
            >
              HOME
            </button>
            <button
              onClick={handleClickAbout}
              className="px-4 py-3 rounded-full text-[#b2de21] bg-black text-left"
            >
              ABOUT
            </button>
            <button
              onClick={handleClickWork}
              className="px-4 py-3 rounded-full text-[#b2de21] bg-black text-left"
            >
              WORK
            </button>
            <Link href="/contact">
              <button className="w-full px-4 py-3 rounded-full text-[#b2de21] bg-black text-left">
                CONTACT
              </button>
            </Link>
            <Link href="https://valentine.a4kashhh.in" target="_blank">
              <button className="w-full px-4 py-3 rounded-full text-white bg-gradient-to-r from-pink-500 to-red-500 text-center font-bold">
                💝 VALENTINE 💝
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;