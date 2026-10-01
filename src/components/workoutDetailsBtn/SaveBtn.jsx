'use client'
import { workoutContext } from "@/context/WorkoutContextProvider";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveBtn = ({ workout }) => {
  const context =useContext(workoutContext);
  if (!context) {
    throw new Error("SaveBtn must be used within a WorkoutContextProvider");
  }
  const { saved, setSaved } = context;

  const handleSave = () => {
    if (!saved.some((item) => item.id === workout.id)) {
      setSaved([...saved, workout]);
      toast.success("Workout saved for later!");
    }else{
        toast.error("Workout already saved!");
    }
  }
  return (
    <button
      onClick={()=> handleSave()}
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
  );
};

export default SaveBtn;
