"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

const DoneBtn = () => {
  const [DoneBtn, setDoneBtn] = useState(false);

  const handleMarkAsDone = (btn) => {
    setDoneBtn(btn);
    if(btn){
        toast.success("Workout marked as done!");
    }else{
        toast.info("Workout marked as not done!");
    }
  };
  return (
    <div>
      <button className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-black bg-[#D6FF00] rounded-full hover:bg-[#c2e600] transition-colors" onClick={()=>handleMarkAsDone(!DoneBtn)}>
        {!DoneBtn ? (<Check className="w-4 h-4" strokeWidth={3} />) : null}
        {DoneBtn ? "Done" : "Mark as Done"}
      </button>
    </div>
  );
};

export default DoneBtn;
