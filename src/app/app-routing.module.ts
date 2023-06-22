import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { WorkoutPage } from './pages/workout/workout.page';
import { GoalPage } from './pages/goal/goal.page';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/dashboard'
  },
  {
    path:'dashboard',
    component:DashboardPage
  },
  {
    path:'goal',
    component:GoalPage
  },
  {
    path:'goal/:id',
    component:GoalPage
  },
  {
    path:'workout',
    component:WorkoutPage
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
