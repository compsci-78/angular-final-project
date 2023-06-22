import { Exercise } from "./exercise.model"

export interface WorkoutExercise{
    id:number,
    sets:number,
    reps:number,
    restMins:number,
    duration:number
    exercise:Exercise
}