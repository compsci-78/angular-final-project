import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, booleanAttribute } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { Goal } from '../models/goal.model';
import { GoalWorkout } from '../models/goalworkout.model';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private _goals: Goal[] =[]
  private _goal?: Goal
  private _goalWorkout?:GoalWorkout

  get goals(): Goal[]{ return this._goals}
  get goal(): Goal|undefined { return this._goal}
  get goalWorkout(): GoalWorkout|undefined { return this._goalWorkout}

  private _loading: boolean = false
  get loading(): boolean { return this._loading }

  constructor(private readonly http: HttpClient) { 
  }

  public getGoals(): void {
    this._loading=true
    this.http.get<any>("http://localhost:4000/goals")
    .pipe(
      finalize(() => {
        this._loading = false
      })
    )
    .subscribe(
      {
        next: (data) => {
          this._goals=data.data
        },
        error: (error: HttpErrorResponse) => { console.log("ERROR",error.message) }
      }
    )
  }
  public getGoal(id?:number): void {
    this._loading=true
    this.http.get<any>("http://localhost:4000/goals/"+id)
    .pipe(
      finalize(() => {
        this._loading = false
      })
    )
    .subscribe(
      {
        next: (data) => {
          this._goal=data.data        
        },
        error: (error: HttpErrorResponse) => { console.log("ERROR",error.message) }
      }
    )
  }
  public createGoal(request:any):void {
    const headers = new HttpHeaders({
      "content-type":"application/json"
    })

     this.http.post<Goal>("http://localhost:4000/goals",request,{headers})
    .subscribe(
      {
        next: (data) => {
          this._goal=data
          console.log("Goal from service: ",this._goal)
        },
        error: (error: HttpErrorResponse) => { console.log("ERROR",error.message) }
      }
    )
  }
  public updateGoal(request:any,id:any):void {
    const headers = new HttpHeaders({
      "content-type":"application/json"
    })

     this.http.put<Goal>("http://localhost:4000/goals/"+id,request,{headers})
    .subscribe(
      {
        next: (data) => {
          this._goal=data          
        },
        error: (error: HttpErrorResponse) => { console.log("ERROR",error.message) }
      }
    )
  }
  public addGoalWorkout(request:any,id:any):void {
    const headers = new HttpHeaders({
      "content-type":"application/json"
    })

     this.http.post<GoalWorkout>("http://localhost:4000/goals/"+id+"/workouts",request,{headers})
    .subscribe(
      {
        next: (data) => {
          this._goalWorkout=data          
        },
        error: (error: HttpErrorResponse) => { console.log("ERROR",error.message) }
      }
    )
  }
  public removeGoalWorkout(request:any,id:any):void {
    const httpOptions = {
      headers:new HttpHeaders({"content-type":"application/json"}),
      body:JSON.stringify(request)
    };

     this.http.delete<any>("http://localhost:4000/goals/"+id+"/workouts",httpOptions)
    .subscribe(
      {
        next: (data) => {
          console.log("DELETED")       
        },
        error: (error: HttpErrorResponse) => { console.log("ERROR",error.message) }
      }
    )
  }
  public updateGoalWorkut(request:any,id:any,gwId:any):void {
    const headers = new HttpHeaders({
      "content-type":"application/json"
    })

     this.http.put<any>("http://localhost:4000/goals/"+id+"/workouts/"+gwId,request,{headers})
    .subscribe(
      {
        next: (data) => {
          //this._goal=data          
        },
        error: (error: HttpErrorResponse) => { console.log("ERROR",error.message) }
      }
    )
  }
}
