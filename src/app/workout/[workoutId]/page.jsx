import React from "react";
import WorkeroutIdCard from "@/components/homePage/WorkoutIdCard";
const getWorkoutData = async (id) => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "force-cache",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }
  return res.json();
};
const page = async ({ params }) => {
  const { workoutId } = await params;
  const workoutData = await getWorkoutData(workoutId);
  return (
    <div>
      <WorkeroutIdCard workout={workoutData} />
    </div>
  );
};

export default page;
