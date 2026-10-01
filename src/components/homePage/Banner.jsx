import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative overflow-hidden rounded-2xl bg-[#12161a] border border-neutral-800/80 px-8 py-12 md:px-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#bbf426] uppercase mb-4">
              WORKOUT LIBRARY
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.05]">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Link
              href="#workouts"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#bbf426] text-black text-xs sm:text-sm font-extrabold uppercase tracking-wide transition-all duration-200 hover:bg-[#a6dc1c] active:scale-95 shadow-md shadow-[#bbf426]/10"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              <Image
                src={bannerImage}
                alt="Workout illustration"
                priority
                className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
