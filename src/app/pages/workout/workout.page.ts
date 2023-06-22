import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout.model';
import { WorkoutExercise } from 'src/app/models/workoutexercise.model';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.css']
})
export class WorkoutPage implements OnInit{
  
  workoutExercises:WorkoutExercise[]=[]

  get workouts():Workout[]{
    return this.workoutService.workouts
  }
  constructor(private readonly workoutService:WorkoutService){}

  ngOnInit(): void {
      this.workoutService.getWorkouts()
  }
  public onWorkoutClick(workout: Workout) {
    this.workoutExercises =workout.workoutExercises
  }
}
