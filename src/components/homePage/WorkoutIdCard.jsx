import React from "react";
import Image from "next/image";
import SaveBtn from "../workoutDetailsBtn/SaveBtn";
import PlanBtn from "../workoutDetailsBtn/PlanBtn";

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

        
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="space-y-4">
            
            <div>
              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                {workout.name}
              </h1>

              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {workout.description}
              </p>
            </div>

            
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

          
          <div className="flex flex-wrap items-center gap-3 pt-6 mt-4">
            
            <PlanBtn id={workout.id} workout={workout} />     
            <SaveBtn id={workout.id} workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutIdCard;
