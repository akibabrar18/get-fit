import React from "react";

const obj={
    exercises: 2,
    minutes: 23,
    calories: 190 
}

const PlanStats = () => {
  return (
    <div className="container mx-auto p-8 bg-[#0b0e14] text-white font-sans rounded-2xl my-4">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white">
          MY PLAN
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats Card Container */}
      <div className="grid grid-cols-3 bg-[#11151f] border border-zinc-800/80 rounded-2xl px-8 py-7 shadow-sm">
        {/* Exercises (with lime/neon green accent) */}
        <div className="flex flex-col">
          <span className="text-sm font-normal text-zinc-400">Exercises</span>
          <span className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#bef21f] tracking-tight">
            {obj.exercises}
          </span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col pl-8 border-l border-zinc-800/80">
          <span className="text-sm font-normal text-zinc-400">Minutes</span>
          <span className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {obj.minutes}
          </span>
        </div>

        {/* Calories */}
        <div className="flex flex-col pl-8 border-l border-zinc-800/80">
          <span className="text-sm font-normal text-zinc-400">Calories</span>
          <span className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {obj.calories}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanStats;
