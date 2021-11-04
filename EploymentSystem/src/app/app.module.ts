import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { EmploymentsComponent } from './employments/employments.component';
import { AddEmploymentComponent } from './addEmployment/add-employment.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { compesationsComponent } from './compesations/compesations.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EmploymentsComponent,
    AddEmploymentComponent,
    HomeComponent,
    compesationsComponent,
    ViewEmployeeComponent,
    UpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
