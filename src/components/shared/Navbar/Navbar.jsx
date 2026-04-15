"use client"

import React from 'react';
import logoImg from "@/assets/logo.png"
import Image from 'next/image';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { CiClock2 } from 'react-icons/ci';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {

    const pathname = usePathname();
    // console.log(pathname);

    return (
        <nav className='shadow'>
            <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center py-2 container mx-auto ">
                <Image
                    src={logoImg}
                    alt="keen keeper logo"
                    className=""
                />

                <div>
                    <Link href="/">
                        <button className={`btn ${pathname === "/" ? "bg-[#244d3f] text-white" : "btn-ghost"}`}>
                            <RiHome2Line className="text-xl" />
                            Home
                        </button>
                    </Link>

                    <Link href="/timeline" >
                        <button className={`btn ${pathname === "/timeline" ? "bg-[#244d3f] text-white" : "btn-ghost"}`}>
                            <CiClock2 className="text-xl" />
                            Timeline
                        </button>
                    </Link>

                    <Link href="/stats" >
                        <button className={`btn ${pathname === "/stats" ? "bg-[#244d3f] text-white" : "btn-ghost"}`}>
                            <TfiStatsUp className="text-xl" />
                            Stats
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;