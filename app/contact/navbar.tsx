import React from "react";
import Image from "next/image";
import Link from "next/link";

// System font fallbacks instead of Google Fonts
export const anton = {
  className: 'font-display'
};

export const openSans = {
  className: 'font-sans'
};

export const poppins = {
  className: 'font-sans'
};

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <nav className="md:-mx-3 mt-3 mb-8 flex justify-between items-center select-none">
      <Image src="/icons/logoIcon.png" className="-ml-3" width={160} height={100} alt="" />
      <Link href="/">
        <button
          className={`md:px-8 px-5 md:py-2 py-[6px] mb-1 bg-[#b2de21] text-white md:text-base text-sm ${openSans.className} font-[600] rounded-full hover:scale-105 active:scale-95 transition-all duration-300 delay-75 ease-in-out`}
        >
          Go Back
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
