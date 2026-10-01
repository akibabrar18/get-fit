"use client";

import { createContext } from "react";
import React, { useState } from "react";

export const workoutContext = createContext({});

const WorkoutContextProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
  };
  return (
    <div>
      <workoutContext.Provider value={sharedData}>
        {children}
      </workoutContext.Provider>
    </div>
  );
};

export default WorkoutContextProvider;
