import { Component, Input, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal.model';
import { GoalWorkout } from 'src/app/models/goalworkout.model';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export class DashboardPage implements OnInit {
  
  get isLoading():boolean{
    return this.goalService.loading
  }

  get goals():Goal[]{
    return this.goalService.goals
  }

  constructor(private readonly goalService: GoalService) { }

  ngOnInit() {
    
    this.goalService.getGoals()
    
  }
}

