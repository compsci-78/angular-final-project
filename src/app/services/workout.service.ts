import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private _workouts:Workout[]=[]
  get workouts(): Workout[]{ return this._workouts}
  private _loading: boolean = false
  
  constructor(private readonly http:HttpClient) { }

  public getWorkouts(): void {
    this.http.get<any>("http://localhost:4000/workouts")
    .pipe(
      finalize(() => {
        this._loading = false
      })
    )
    .subscribe(
      {
        next: (data) => {
          this._workouts=data.data
        },
        error: (error: HttpErrorResponse) => { console.log(error.message) }
      }
    )
  }
}
