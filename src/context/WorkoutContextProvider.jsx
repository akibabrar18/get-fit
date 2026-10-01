'use client';

import { createContext } from "react";
import React, { useState } from "react";

export const workoutContext = createContext({});

const WorkoutContextProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  return <div></div>;
};

export default WorkoutContextProvider;
