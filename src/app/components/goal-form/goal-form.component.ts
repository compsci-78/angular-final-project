import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Goal } from 'src/app/models/goal.model';
import { GoalService } from 'src/app/services/goal.service';
import {NgbDateStruct,NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.scss']
})
export class GoalFormComponent implements OnInit {
  @Input() goal?: Goal
  @Input() workoutIds?: number[] = []

  model1: NgbDateStruct |undefined
  model2: NgbDateStruct |undefined
	date: { year: number; month: number,day:number } = { year: 0, month: 0,day:0 }

  constructor(private readonly goalService: GoalService) { }
  // in case something should be returned
  @Output() formSubmitEmit: EventEmitter<void>=new EventEmitter();

  ngOnInit(): void {

    //console.log("Goal from FORM: ", this.goal)

    if(this.goal?.startsAt){
      const [year, month, day] = this.goal.startsAt.split('-');
      this.date!.year= parseInt(year)
      this.date!.month= parseInt(month)
      this.date!.day= parseInt(day)
    }
    const fromDate = new NgbDate (this.date.year,this.date.month,this.date.day)
    
    if(this.goal?.endsAt){
      const [year, month, day] = this.goal.endsAt.split('-');
      this.date!.year= parseInt(year)
      this.date!.month= parseInt(month)
      this.date!.day= parseInt(day)
    }
    const toDate = new NgbDate (this.date.year,this.date.month,this.date.day)
    this.model1=fromDate
    this.model2=toDate
  }

  public formSubmit(goalForm: NgForm): void {
    
    const tempDate1 = new Date(this.model1?.year+'-'+this.model1?.month+'-'+this.model1?.day);
    const tempDate2 = new Date(this.model2?.year+'-'+this.model2?.month+'-'+this.model2?.day);
    
    const dateToUpdate = {      
      startsAt: '' + tempDate1.toLocaleDateString("default",{year:"numeric"}) + '-' + tempDate1.toLocaleDateString("default",{month:"2-digit"}) + '-' + tempDate1.toLocaleDateString("default",{day:"2-digit"}),
      endsAt: '' + tempDate2.toLocaleDateString("default",{year:"numeric"}) + '-' + tempDate2.toLocaleDateString("default",{month:"2-digit"}) + '-' + tempDate2.toLocaleDateString("default",{day:"2-digit"})
    }

    this.goalService.updateGoal(dateToUpdate,this.goal?.id)
    this.goal?.goalWorkouts
    this.formSubmitEmit.emit()
  }
  public createGoal(event:Event):void{
    //return (event.target as HTMLInputElement).value;
    const tempDate1 = new Date(this.model1?.year+'-'+this.model1?.month+'-'+this.model1?.day);
    const tempDate2 = new Date(this.model2?.year+'-'+this.model2?.month+'-'+this.model2?.day);
    
    const goalToCreate = {
      userId: 1,
      startsAt: '' + tempDate1.toLocaleDateString("default",{year:"numeric"}) + '-' + tempDate1.toLocaleDateString("default",{month:"2-digit"}) + '-' + tempDate1.toLocaleDateString("default",{day:"2-digit"}),
      endsAt: '' + tempDate2.toLocaleDateString("default",{year:"numeric"}) + '-' + tempDate2.toLocaleDateString("default",{month:"2-digit"}) + '-' + tempDate2.toLocaleDateString("default",{day:"2-digit"}),
      workouts: this.workoutIds
    }
    
    console.log(goalToCreate)
    if (this.workoutIds != undefined) {
      this.goalService.createGoal(goalToCreate)
      this.goal?.goalWorkouts
      //this.formSubmitEmit.emit()
    }
  }
}
