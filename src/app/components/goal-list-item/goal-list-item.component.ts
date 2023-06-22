import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from 'src/app/models/goal.model';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-goal-list-item',
  templateUrl: './goal-list-item.component.html',
  styleUrls: ['./goal-list-item.component.scss']
})
export class GoalListItemComponent {
  @Input() goal?:Goal
  
  constructor(
    private readonly router:Router,){}
  
  onGoalClick(): void {

     this.router.navigateByUrl("/goal/"+this.goal?.id)
  }
}
