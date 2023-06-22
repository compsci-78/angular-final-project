import { GoalWorkout } from "./goalworkout.model";

export interface Goal{
    id:number;
    status:string,
    startsAt: string,
    endsAt:string,
    goalWorkouts:GoalWorkout[]
}