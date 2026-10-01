"use client";
import React, { useContext, useState } from "react";
import { workoutContext } from "@/context/WorkoutContextProvider";
import Link from "next/link";
import PlanCard from "@/components/saved&plan/PlanCard";

const item = (
  <>
    <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-white">
      NOTHING HERE YET
    </h2>
    <p className="mt-2 text-sm text-[#8e95a2] max-w-sm">
      Browse the library and add a lift to get today moving.
    </p>
    <Link
      href="/"
      className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#bbf426] text-black text-xs sm:text-sm font-extrabold uppercase tracking-wide transition-all duration-200 hover:bg-[#a6dc1c] active:scale-95 shadow-md shadow-[#bbf426]/10"
    >
      Go to workouts
    </Link>
  </>
);

const PlanStats = () => {
  const context = useContext(workoutContext);
  if (!context) {
    throw new Error("PlanStats must be used within a WorkoutContextProvider");
  }
  const { plan, saved } = context;

  const [handlePlanOrSaved, setHandlePlanOrSaved] = useState(false);
  const [sortBy, setSortBy] = useState("Duration");

  const sortWorkouts = (workouts) => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "Duration") return (b.duration || 0) - (a.duration || 0);
      if (sortBy === "Calories") return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
      if (sortBy === "Rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });
  };

  const sortedPlan = sortWorkouts(plan);
  const sortedSaved = sortWorkouts(saved);

  const obj = !handlePlanOrSaved
    ? {
        exercises: plan.length,
        minutes: plan.reduce((total, workout) => total + workout.duration, 0),
        calories: plan.reduce(
          (total, workout) => total + workout.caloriesBurned,
          0,
        ),
      }
    : {
        exercises: saved.length,
        minutes: saved.reduce((total, workout) => total + workout.duration, 0),
        calories: saved.reduce(
          (total, workout) => total + workout.caloriesBurned,
          0,
        ),
      };

  return (
    <div className="container mx-auto p-8 bg-[#0b0e14] text-white font-sans rounded-2xl my-4">
      <div className="mb-6">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white">
          MY PLAN
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-3 bg-[#11151f] border border-zinc-800/80 rounded-2xl px-8 py-7 shadow-sm">
        <div className="flex flex-col">
          <span className="text-sm font-normal text-zinc-400">Exercises</span>
          <span className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#bef21f] tracking-tight">
            {obj.exercises}
          </span>
        </div>

        <div className="flex flex-col pl-8 border-l border-zinc-800/80">
          <span className="text-sm font-normal text-zinc-400">Minutes</span>
          <span className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {obj.minutes}
          </span>
        </div>

        <div className="flex flex-col pl-8 border-l border-zinc-800/80">
          <span className="text-sm font-normal text-zinc-400">Calories</span>
          <span className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {obj.calories}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-6 text-white min-h-[200px]">
        {/* Pill Toggle Container */}
        <div className="flex justify-between items-center w-full max-w-5xl mb-6">
          <div className="flex items-center p-1 bg-[#13171f] border border-[#232936] rounded-2xl">
            {/* Today's Plan Button */}
            <button
              type="button"
              onClick={() => setHandlePlanOrSaved(false)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                !handlePlanOrSaved
                  ? "bg-[#202736] text-white shadow-sm"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Today’s Plan
            </button>

            {/* Saved Button */}
            <button
              type="button"
              onClick={() => setHandlePlanOrSaved(true)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                handlePlanOrSaved
                  ? "bg-[#202736] text-white shadow-sm"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Saved
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm font-semibold select-none">
              Sort By
            </span>

            <div className="relative inline-flex items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#13171f] hover:bg-[#202736] border border-[#232936] text-white text-sm font-semibold pl-6 pr-10 py-2.5 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-500/30"
              >
                <option value="Duration" className="bg-[#13171f] text-white">
                  Duration
                </option>
                <option value="Calories" className="bg-[#13171f] text-white">
                  Calories
                </option>
                <option value="Rating" className="bg-[#13171f] text-white">
                  Rating
                </option>
              </select>

              {/* Chevron Down Icon */}
              <svg
                className="absolute right-3.5 w-4 h-4 text-gray-300 pointer-events-none stroke-[2.5]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Dynamic Content Rendering */}
        <div className="flex flex-col items-center justify-center min-h-[360px] w-full rounded-2xl border border-dashed border-[#1f242d] bg-[#0c0e12] px-6 py-16 text-center my-6">
          {!handlePlanOrSaved ? (
            /* Rendered when Today's Plan is active */
            sortedPlan.length === 0 ? (
              item
            ) : (
              <>
                {sortedPlan.map((workout) => (
                  <PlanCard key={workout.id} workout={workout} />
                ))}
              </>
            )
          ) : /* Rendered when Saved is active */
          sortedSaved.length === 0 ? (
            item
          ) : (
            <>
              {sortedSaved.map((workout) => (
                <PlanCard
                  key={workout.id}
                  workout={workout}
                  whichRemove={handlePlanOrSaved}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanStats;