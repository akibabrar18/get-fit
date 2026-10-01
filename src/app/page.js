import Banner from '@/components/homePage/Banner';
import WorkoutCard from '@/components/homePage/WorkoutCard';
import React from 'react';

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <Banner></Banner>
      <div id="workouts" className="container mx-auto">
        <h1 className="text-2xl font-bold text-white">THE LIBRARY</h1>
        <p className=" text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
          Twelve lifts covering every major muscle group.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {
            data.map((workout) => <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default page;