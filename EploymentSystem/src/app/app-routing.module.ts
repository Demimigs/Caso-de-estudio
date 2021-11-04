import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmploymentComponent } from './addEmployment/add-employment.component';
import { EmploymentsComponent } from './employments/employments.component';
import { HomeComponent } from './home/home.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'addEmployment',
    component: AddEmploymentComponent,
  },
  {
    path: 'employments',
    component: EmploymentsComponent,
  },
  {
    path: 'employee/:id',
    component: ViewEmployeeComponent,
  },
  {
    path: 'searchEmployments',
    component: EmploymentsComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
