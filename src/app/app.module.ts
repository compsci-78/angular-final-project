import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgbModule,NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { WorkoutPage } from './pages/workout/workout.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GoalPage } from './pages/goal/goal.page';
import { GoalListItemComponent } from './components/goal-list-item/goal-list-item.component';
import { WorkoutListItemComponent } from './components/workout-list-item/workout-list-item.component';
import { GoalFormComponent } from './components/goal-form/goal-form.component';
import { GoalworkoutListItemComponent } from './components/goalworkout-list-item/goalworkout-list-item.component';
import { GoalworkoutListComponent } from './components/goalworkout-list/goalworkout-list.component';
import { WorkoutExerciseListItemComponent } from './components/workout-exercise-list-item/workout-exercise-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    WorkoutPage,
    NavbarComponent,
    GoalPage,
    GoalListItemComponent,
    WorkoutListItemComponent,
    GoalFormComponent,
    GoalworkoutListItemComponent,
    GoalworkoutListComponent,
    WorkoutExerciseListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbDatepickerModule,
    JsonPipe

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
