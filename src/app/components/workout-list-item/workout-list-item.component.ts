import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workout } from 'src/app/models/workout.model';

@Component({
  selector: 'app-workout-list-item',
  templateUrl: './workout-list-item.component.html',
  styleUrls: ['./workout-list-item.component.scss']
})
export class WorkoutListItemComponent {
  @Input() workout?: Workout
  @Output() workoutEmit: EventEmitter<Workout> = new EventEmitter();

  onWorkoutClick(): void {
    this.workoutEmit.emit(this.workout)
  }
}
