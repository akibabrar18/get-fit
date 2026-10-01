import React, { useContext } from "react";
import { Clock, Flame, Star, Check, X } from "lucide-react";
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
    <div className="flex items-center justify-between p-3 pr-5 bg-[#121418] border border-gray-800 rounded-2xl w-full max-w-5xl font-sans my-2">
      <div className="flex items-center gap-4">
        <div className="w-32 h-20 flex-shrink-0">
          <Image
            src={workout.image}
            alt={workout.name}
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-1">
          <h2 className="text-white font-bold text-lg uppercase tracking-wide m-0">
            {workout.name}
          </h2>
          <p className="text-gray-400 text-sm m-0">{workout.equipment}</p>

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

      <div className="flex items-center gap-4">
        <Link href={`/workout/${workout.id}`}>
          <button className="px-5 py-2 text-sm font-medium text-white bg-transparent border border-gray-700 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-colors">
            View Details
          </button>
        </Link>

        {!whichRemove && <DoneBtn />}

        <button
          className="ml-2 text-gray-500 hover:text-gray-300 transition-colors "
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
