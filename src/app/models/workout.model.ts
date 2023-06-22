import { WorkoutExercise } from "./workoutexercise.model";

export interface Workout{
    id:number,
    name:string,
    type:string,
    workoutExercises: WorkoutExercise[]
}