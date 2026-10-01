import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a0a0a] border-t border-neutral-900 px-4 md:px-8 py-5">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="relative w-6 h-6 flex items-center justify-center">
                        <Image
                            src={logo}
                            alt="Fitlog Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-white font-extrabold text-base tracking-wider">
                        FITLOG
                    </span>
                </Link>

                <p className="text-xs text-neutral-400 font-normal">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;