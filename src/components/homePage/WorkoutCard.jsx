import React from "react";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  const {
    name,
    image,
    muscleGroups = [],
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link href={`/workout/${workout.id}`} className="block group">
      <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-[#13161c] text-white shadow-xl transition-transform duration-300 hover:scale-[1.02]">
        
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>

        
        <div className="p-6">
          
          <div className="flex flex-wrap gap-2">
            {muscleGroups.map((group, index) => (
              <span
                key={index}
                className="rounded-full bg-[#c8ff27] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-black"
              >
                {group}
              </span>
            ))}
          </div>

          
          <h3 className="mt-4 text-xl font-black uppercase tracking-wide text-white">
            {name}
          </h3>

          
          <p className="mt-1 text-sm font-medium text-gray-400">{equipment}</p>

          
          <hr className="my-5 border-[#232834]" />

          
          <div className="flex items-center space-x-6 text-sm font-medium text-gray-400">
            
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{duration} min</span>
            </div>

            
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4" />
              <span>{caloriesBurned} kcal</span>
            </div>

            
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
