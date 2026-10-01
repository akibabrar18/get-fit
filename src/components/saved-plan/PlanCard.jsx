import React, { useContext } from "react";
import { Clock, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { workoutContext } from "@/context/WorkoutContextProvider";
import DoneBtn from "./DoneBtn";
import { toast } from "react-toastify";

const WorkoutCard = ({ workout, whichRemove }) => {
  const removeWorkoutFromPlan = (workout, workouts, setWorkouts) => {
    setWorkouts(workouts.filter((w) => w.id !== workout.id));
    toast.info(
      `${workout.name} removed from ${!whichRemove ? "plan" : "saved"}!`,
    );
  };

  const context = useContext(workoutContext);
  if (!context) {
    throw new Error("WorkoutCard must be used within a WorkoutContextProvider");
  }

  const { plan, setPlan, saved, setSaved } = context;

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:pr-5 bg-[#121418] border border-gray-800 rounded-2xl w-full max-w-5xl font-sans my-2 gap-4 md:gap-0">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
        <div className="w-full sm:w-32 h-44 sm:h-20 flex-shrink-0">
          <Image
            src={workout.image}
            alt={workout.name}
            width={300}
            height={200}
            className="h-full w-full object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center gap-1 w-full min-w-0">
          <h2 className="text-white font-bold text-base sm:text-lg uppercase tracking-wide m-0 truncate">
            {workout.name}
          </h2>

          <p className="text-gray-400 text-sm m-0 truncate">
            {workout.equipment}
          </p>

          <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-5 mt-2">
            <div className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-[#D6FF00] flex-shrink-0" strokeWidth={2.5} />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm">
              <Flame className="w-4 h-4 text-[#D6FF00] flex-shrink-0" strokeWidth={2.5} />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm">
              <Star className="w-4 h-4 text-[#D6FF00] flex-shrink-0" strokeWidth={2.5} />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between md:justify-end gap-2 sm:gap-4 w-full md:w-auto border-t border-gray-800 pt-3 md:border-0 md:pt-0">
        <Link href={`/workout/${workout.id}`}>
          <button className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white bg-transparent border border-gray-700 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-colors whitespace-nowrap">
            View Details
          </button>
        </Link>

        {!whichRemove && <DoneBtn />}

        <button
          className="text-gray-500 hover:text-gray-300 transition-colors p-1"
          onClick={() =>
            whichRemove
              ? removeWorkoutFromPlan(workout, saved, setSaved)
              : removeWorkoutFromPlan(workout, plan, setPlan)
          }
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;