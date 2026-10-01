import React from "react";
import Image from "next/image";

const WorkoutIdCard = ({ workout }) => {
  if (!workout) return null;

  const stats = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center font-sans text-white">
      <div className="container mx-auto bg-[#14161b] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 shadow-2xl">
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#1e222b]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Column: Workout Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                {workout.name}
              </h1>

              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {workout.description}
              </p>
            </div>

            {/* Muscle Group Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {workout.muscleGroups?.map((group, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#bbf43d] text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Key Specs Table */}
            <div className="bg-[#181b22] rounded-xl px-4 py-1 divide-y divide-gray-800/80">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 text-xs sm:text-[13px]"
                >
                  <span className="font-semibold text-gray-400 tracking-wider">
                    {item.label}
                  </span>

                  <span className="font-medium text-gray-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5">
                INSTRUCTIONS
              </h3>

              <ol className="space-y-1.5 text-xs text-gray-400 leading-relaxed">
                {workout.instructions?.map((step, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-gray-500 select-none">
                      {idx + 1}.
                    </span>

                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-6 mt-4">
            {/* Add to Today's Plan */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-black bg-[#bbf43d] hover:bg-[#aee634] active:scale-[0.98] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="12" y1="14" x2="12" y2="18" />
                <line x1="10" y1="16" x2="14" y2="16" />
              </svg>

              <span>Add to today&apos;s plan</span>
            </button>

            {/* Save for Later */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs text-gray-300 bg-[#1e222b] hover:bg-[#252a36] border border-gray-700/60 active:scale-[0.98] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>

              <span>Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutIdCard;
