import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { GoalWorkout } from 'src/app/models/goalworkout.model';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-goalworkout-list-item',
  templateUrl: './goalworkout-list-item.component.html',
  styleUrls: ['./goalworkout-list-item.component.scss']
})
export class GoalworkoutListItemComponent {
  @Input() goalWorkout?: GoalWorkout
  @Input() goal?:Goal
  @Output() goalWorkoutEmit:EventEmitter<void> = new EventEmitter()
  @Output() goalWorkoutCheckEmit:EventEmitter<void> = new EventEmitter()

  constructor(private readonly goalService:GoalService){}

  onRemove():void{
    const ids:number[]=[]
    ids.push(this.goalWorkout!.id)
    const goalWorkouts={goalWorkoutIds:ids}
    this.goalService.removeGoalWorkout(goalWorkouts,this.goal?.id)
    this.goalWorkoutEmit.emit();
  }
  onChecked():void{
    this.goalService.updateGoalWorkut({status:'COMPLETED'},this.goal?.id,this.goalWorkout?.id)
    this.goalWorkoutCheckEmit.emit();
  }
}
