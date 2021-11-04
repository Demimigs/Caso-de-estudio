import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import compesation from '../Clases/compesation';
import Employee from '../Clases/employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  [x: string]: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}


  id?: string;
  type?: string;
  month?: number;
  year?: number;
  description?: string;
  amount?: number;

  employeeID = this.route.snapshot.paramMap.get('id');
  employeeData: Employee = {};
  newcompesation: compesation = {};

  display: boolean = false;
  displaycompesation: boolean = false;
  messagecompesation: boolean = false;
  displaycompesationEdit: boolean = false;
  message: string = '';
  messageError: string = '';


  ngOnInit(): void {
    this.fetchEmployee();
  }

  private fetchEmployee() {
    this.http
      .get(`http://localhost:8080/api/get-employee/${this.employeeID}`)
      .subscribe((employee) => {
        this.employeeData = employee;
        this.employeeData.compesationList!.sort((a, b) => {
          if (a.year === b.year) {
            return a.month! - b.month!;
          }
          return a.year! > b.year! ? 1 : -1;
        });
      });
  }

  updateEmployeeData(data: Employee) {
    this.message = '';
    let flag = false;

    data.compesationList = this.employeeData.compesationList;
    if (data.firstName == '') this.message += 'First name ';
    if (data.lastName == '') this.message += 'Last name ';
    if (data.position == '') this.message += 'Position ';
    if (data.birthDate == '') this.message += 'Birth date ';
    if (this.checkDate(new Date(data.birthDate!))) {
      flag = true;
      this.message += ' ';
    }
    if (this.message != '') {
      if (this.message.length > 1) {
        this.message += 'missing required field(s)';
      }
      if (flag) this.message += 'Invalid date, cannot be after today';
      this.display = true;
    } else {
      this.saveUser(data).subscribe((res: any) => {
        const response = JSON.parse(JSON.stringify(res));
        if (response.code == 400) this.message = 'Employee already exists';
        else this.message = 'Employee updated';
        this.display = true;
        this.fetchEmployee();
      });
    }
  }

  updatecompesationData(data: compesation) {
    data.month = parseInt(data.month!.toString());
    data.year = parseInt(data.year!.toString());
    let auxMessage: string = '';
    if (data.type == 'Bonus' && data.amount! <= 0) {
      auxMessage += 'Bonus selected, amount must be more than zero';
    } else if (
      (data.type == 'Commission' || data.type == 'Allowance') &&
      (data.description == '' || data.amount! <= 0)
    ) {
      auxMessage +=
        'Commission or Allowance selected, description must not be empty and amount must be more than zero';
    } else if (
      data.type == 'Adjustment' &&
      (data.description == '' || data.amount == 0)
    ) {
      auxMessage +=
        'Adjustment selected, description must not be empty or data must not be zero';
    }
    if (auxMessage.length > 0) {
      this.messagecompesation = true;
      this.messageError = auxMessage;
    } else {
      this.employeeData.compesationList?.push(data);

      this.saveUsercompesation(this.employeeData).subscribe((res: any) => {
        const response = JSON.parse(JSON.stringify(res));
        if (response.code == 400)
          this.messageError = 'compesation already exists';
        else this.messageError = 'compesation added';

        this.messagecompesation = true;
        this.fetchEmployee();
      });
    }
  }

  checkDate(date: Date) {
    var today = new Date();
    var selected = new Date(date);
    if (today < selected) return true;
    return false;
  }

  saveUser(data: Employee) {
    return this.http.post('http://localhost:8080/api/update-employee', data);
  }

  saveUsercompesation(data: Employee) {
    return this.http.post(
      'http://localhost:8080/api/update-employee-compesation',
      data
    );
  }

  editcompesationData(data: any) {
    data.month = parseInt(data.month!.toString());
    data.year = parseInt(data.year!.toString());
    this.employeeData.compesationList![data.id].type = data.type;
    this.employeeData.compesationList![data.id].month = data.month;
    this.employeeData.compesationList![data.id].year = data.year;
    this.employeeData.compesationList![data.id].description = data.description;
    this.employeeData.compesationList![data.id].amount = data.amount;

    let auxMessage: string = '';
    if (data.type == 'Bonus' && data.amount! <= 0) {
      auxMessage += 'Bonus selected, amount must be more than zero';
    } else if (
      (data.type == 'Commission' || data.type == 'Allowance') && (data.description == '' || data.amount! <= 0)) {
      auxMessage += 'Commission or Allowance selected, description must not be empty and amount must be more than zero';
    } else if (
      data.type == 'Adjustment' && (data.description == '' || data.amount == 0)) {
      auxMessage += 'Adjustment selected, description must not be empty or data must not be zero';
    }
    if (auxMessage.length > 0) {
      this.messagecompesation = true;
      this.messageError = auxMessage;
    } else {
      this.saveUsercompesation(this.employeeData).subscribe((res) => {
        const response = JSON.parse(JSON.stringify(res));
        if (response.code == 400)
          this.messageError = 'compesation already exists';
        else this.messageError = 'compesation edited';

        this.messagecompesation = true;
        this.fetchEmployee();
      });
    }
  }

  edit(index: any) {
    this.displaycompesationEdit = true;
    this.id = index;
    this.type = this.employeeData.compesationList![index].type;
    this.month = this.employeeData.compesationList![index].month;
    this.year = this.employeeData.compesationList![index].year;
    this.description = this.employeeData.compesationList![index].description;
    this.amount = this.employeeData.compesationList![index].amount;
  }

  closeEdit() {
    this.displaycompesationEdit = false;
  }

  showNewcompesation() {
    if (this.displaycompesation) this.displaycompesation = false;
    else this.displaycompesation = true;
  }

  setMonth(index: any) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[index - 1];
  }
}
