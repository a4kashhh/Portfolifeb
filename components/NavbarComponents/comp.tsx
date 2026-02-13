import React from "react";
import Link from "next/link";

// System font fallbacks instead of Google Fonts
export const anton = {
  className: 'font-display'
};

export const openSans = {
  className: 'font-sans'
};

function Comp({ homeRef, aboutRef, workRef }: any) {
  function handleClickHome() {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  }

  function handleClickAbout() {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  }

  function handleClickWork() {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  }

  return (
    <div
      className={`${anton.className} flex justify-evenly items-center gap-5`}
    >
      <button
        onClick={handleClickHome}
        style={{ cursor: 'url("/icons/cursor.png"), auto' }}
        className="px-6 py-2 rounded-full text-[#b2de21] bg-black hover:scale-[102%] hover:bg-[#b2de21] hover:text-black active:scale-95 transition-all duration-300 delay-75 ease-in-out"
      >
        HOME
      </button>
      <button
        onClick={handleClickAbout}
        style={{ cursor: 'url("/icons/cursor.png"), auto' }}
        className="px-6 py-2 rounded-full text-[#b2de21] bg-black hover:scale-[102%] hover:bg-[#b2de21] hover:text-black active:scale-95 transition-all duration-300 delay-75 ease-in-out"
      >
        ABOUT
      </button>
      <button
        onClick={handleClickWork}
        style={{ cursor: 'url("/icons/cursor.png"), auto' }}
        className="px-6 py-2 rounded-full text-[#b2de21] bg-black hover:scale-[102%] hover:bg-[#b2de21] hover:text-black active:scale-95 transition-all duration-300 delay-75 ease-in-out"
      >
        WORK
      </button>
      <Link href="/contact">
        <button
          style={{ cursor: 'url("/icons/cursor.png"), auto' }}
          className="px-6 py-2 rounded-full text-[#b2de21] bg-black hover:scale-[102%] hover:bg-[#b2de21] hover:text-black active:scale-95 transition-all duration-300 delay-75 ease-in-out"
        >
          CONTACT
        </button>
      </Link>
      <Link href="https://valwishing.vercel.app" target="_blank">
        <button
          style={{ cursor: 'url("/icons/cursor.png"), auto' }}
          className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-pink-500 to-red-500 hover:scale-[105%] hover:from-red-600 hover:to-pink-600 active:scale-95 transition-all duration-300 delay-75 ease-in-out animate-pulse"
        >
          💝 VALENTINE
        </button>
      </Link>
    </div>
  );
}

export default Comp;
