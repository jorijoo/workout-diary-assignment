import { createContext } from "react";
import WORKOUTS from "../constants/data/WORKOUTS.json"

const WorkoutContext = createContext(WORKOUTS)


export default WorkoutContext