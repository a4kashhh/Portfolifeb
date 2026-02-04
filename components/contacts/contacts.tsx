/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';

// System font fallbacks instead of Google Fonts
export const anton = {
  className: 'font-display'
};

export const openSans = {
  className: 'font-sans'
};

interface Props {}

function Contacts(props: Props) {
    const {} = props

    const handleMail = () => {
      const mailTo = 'https://mail.google.com/mail/?view=cm&fs=1&to=akashpandey.connect@gmail.com';
      window.open(mailTo, '_blank');
    };

    const mailRef = useRef<HTMLSpanElement>(null);

    return (
        <section className='flex flex-col justify-start items-start md:mx-14 mx-4 mb-12 pb-20 border-b-2 border-[#3b3b3b]/30'>
            <p className={`${openSans.className} font-semibold md:text-[20px] text-[15px] md:mb-5 mb-3`}>HAVE A CREATIVE IDEA? LET'S TALK</p>
            <div className='flex gap-4 justify-start items-center w-full'>
            <p className={`${anton.className} md:text-[80px] text-[27px]`}>
            <span onClick={handleMail} ref={mailRef} className='mailing cursor-pointer hover:text-[#b2d12e] hover:ml-5 transition-all duration-300 delay-75 ease-in-out'>akashpandey.connect@gmail.com</span>
            </p>
            <Link href='/contact'><Image src='/icons/mail.png' alt='' width={80} height={80} className='hover:scale-110 hover:rotate-45 transition-all duration-300 delay-75 ease-in-out' /></Link>
            </div>
        </section>
    )
}

export default Contacts
