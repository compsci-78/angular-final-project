import { Component, Input } from '@angular/core';
import { WorkoutExercise } from 'src/app/models/workoutexercise.model';

@Component({
  selector: 'app-workout-exercise-list-item',
  templateUrl: './workout-exercise-list-item.component.html',
  styleUrls: ['./workout-exercise-list-item.component.scss']
})
export class WorkoutExerciseListItemComponent {
@Input() workoutExercise?:WorkoutExercise

}
