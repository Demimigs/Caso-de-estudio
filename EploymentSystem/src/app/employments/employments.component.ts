import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employments',
  templateUrl: './employments.component.html',
  styleUrls: ['./employments.component.css']
})

export class EmploymentsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  name: string = '';
  last: string = '';
  position: string = '';
  employees: any;
  employeesNoExists: boolean = true;


  ngOnInit(): void {

    this.name = this.route.snapshot.queryParams['name'];
    this.last = this.route.snapshot.queryParams['last'];
    this.position = this.route.snapshot.queryParams['position'];

    if (this.name != null || this.last != null || this.position != null) {
      this.fetchByFilter();
    } else {
      this.fetchEmployees();
    }

  }

  recieveResponse() { this.ngOnInit(); }


  private fetchEmployees() {
    this.http.get('http://localhost:8080/apis/getallemployees').subscribe((employees) => {
        this.employees = employees;
        if (this.employees.length > 0) this.employeesNoExists = false;
      });
  }

  private fetchByFilter() {
    this.http.get(`http://localhost:8080/apis/searchemployees?firstName=${this.name}&lastName=${this.last}&position=${this.position}`
      ).subscribe((employees) => {
        this.employees = employees;
        if (this.employees.length > 0) this.employeesNoExists = false;
      });
  }
  
}

