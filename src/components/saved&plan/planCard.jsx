import React from "react";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import Image from "next/image";

const WorkoutCard = ({ workout }) => {
  return (
    <div className="flex items-center justify-between p-3 pr-5 bg-[#121418] border border-gray-800 rounded-2xl w-full max-w-5xl font-sans">
      {/* Left Section: Image and Details */}
      <div className="flex items-center gap-4">
        {/* Workout Image */}
        <div className="w-32 h-20 flex-shrink-0">
          <Image
            src={workout.image}
            alt={workout.name}
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text and Stats */}
        <div className="flex flex-col justify-center gap-1">
          <h2 className="text-white font-bold text-lg uppercase tracking-wide m-0">
            {workout.name}
          </h2>
          <p className="text-gray-400 text-sm m-0">{workout.equipment}</p>

          {/* Stats Row */}
          <div className="flex items-center gap-5 mt-1">
            <div className="flex items-center gap-1.5 text-gray-300 text-sm">
              <Clock className="w-4 h-4 text-[#D6FF00]" strokeWidth={2.5} />
              <span>{workout.duration} min</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300 text-sm">
              <Flame className="w-4 h-4 text-[#D6FF00]" strokeWidth={2.5} />
              <span>{workout.caloriesBurned} kcal</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300 text-sm">
              <Star className="w-4 h-4 text-[#D6FF00]" strokeWidth={2.5} />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 text-sm font-medium text-white bg-transparent border border-gray-700 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-colors">
          View Details
        </button>

        <button className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-black bg-[#D6FF00] rounded-full hover:bg-[#c2e600] transition-colors">
          <Check className="w-4 h-4" strokeWidth={3} />
          Mark as Done
        </button>

        <button className="ml-2 text-gray-500 hover:text-gray-300 transition-colors">
          <X className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
