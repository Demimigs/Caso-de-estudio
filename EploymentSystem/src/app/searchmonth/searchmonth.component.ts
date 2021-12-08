import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchmonth',
  templateUrl: './searchmonth.component.html',
  styleUrls: ['./searchmonth.component.css']
})
export class SearchmonthComponent implements OnInit {

  @Input()
  id?: string;
  month: number = 1;
  year: number = 2021;

  constructor() {}

  ngOnInit(): void {}

  
  changeMonth(month: any) {
    this.month = month.target.value;
    console.log(month.target.value);
  }


  changeYear(year: any) {
    this.year = year.target.value;
    console.log(year.target.value);
  }
}
