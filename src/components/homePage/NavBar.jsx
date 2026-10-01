"use client";
import { workoutContext } from "@/context/WorkoutContextProvider";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";


const NavBar = ({ planCount = 0, savedCount = 0 }) => {
  const context= useContext(workoutContext);
  if (!context) {
    throw new Error("NavBar must be used within a WorkoutContextProvider");
  }
  const { plan, saved } = context;
  const pathname = usePathname();

  const navLinks = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/plan" },
  ];

  return (
    <nav className=" w-full bg-[#0a0a0a] border-b border-neutral-900 px-4 md:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="text-neutral-400 hover:text-white p-1 mr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu z-50 mt-3 w-48 p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 shadow-xl"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      pathname === link.href ? "text-lime-400 font-semibold" : ""
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
            <span className="text-white font-extrabold text-lg tracking-wider">
              FITLOG
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#1f280e] text-[#bbf426]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <Link
            href="/plan"
            className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
          >
            <span>Plan</span>
            <span className="flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-[#bbf426] text-black font-bold text-xs">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/plan"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <span>Saved</span>
            <span className="flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400 font-semibold text-xs">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;