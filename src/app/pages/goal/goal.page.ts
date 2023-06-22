import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from 'src/app/models/goal.model';
import { GoalWorkout } from 'src/app/models/goalworkout.model';
import { Workout } from 'src/app/models/workout.model';
import { GoalService } from 'src/app/services/goal.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.css']
})
export class GoalPage implements OnInit, AfterViewChecked {

  tempContainer: Workout[] = []
  workoutIds: number[] = []
  tempWorkout: Workout | undefined
  isLoading:boolean= true
  
  get goal(): Goal | undefined {
    return this.goalService.goal
  }
  get goalWorkouts(): GoalWorkout[] | undefined {
    return this.goalService.goal?.goalWorkouts
  }
  get workouts(): Workout[] {
    return this.workoutService.workouts
  }
  
  constructor(
    private readonly workoutService: WorkoutService,
    private readonly goalService: GoalService,
    private readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    // first way
    // this.route.params.subscribe(params=>{
    //   let id = params['id'];
    // })

    // second way 
    this.isLoading= true
    if(this.route.snapshot.params['id']!=undefined){

      let id = this.route.snapshot.params['id']
      this.goalService.getGoal(id)
      
      this.workoutService.getWorkouts()
      
      //console.log("Goal STATUS from goal page: ",this.goal?.status)
    }else{     
      this.workoutService.getWorkouts()
    }
    this.isLoading=false
  }
  ngAfterViewChecked(): void {
    console.log('all done here');
  }

  public onWorkoutClick(workout: Workout) {
    this.tempContainer.push(workout)
    this.workoutIds.push(workout.id)
  }

  public onAddClick() {
    // take goal id 
    const ids:number[]=[]
    // move from tempcontainer and clean it
    this.tempContainer.forEach(elment =>ids.push(elment.id))
    this.tempContainer=[]

    const workouts = { workoutIds:ids}
    this.goalService.addGoalWorkout(workouts,this.goal?.id)
    this.goalService.getGoal(this.goal?.id)
    this.workouts
    window.location.reload()
  }
  public onCleanClick() {
    this.tempContainer = []
  }
 
  public onFormSubmit(): void{
    this.goalService.getGoal(this.goal?.id)
    this.goalWorkouts
    window.location.reload()
  }
  public onGoalWorkoutCheck() {
    this.goalService.getGoal(this.goal?.id)
    this.goalWorkouts
    window.location.reload()
  }
  
  public onRemove():void{
    this.goalService.getGoal(this.goal?.id)
    this.goalWorkouts
    window.location.reload()
  }
}
