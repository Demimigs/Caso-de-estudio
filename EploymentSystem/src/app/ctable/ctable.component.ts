import Compesation from '../Clases/compesation';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctable',
  templateUrl: './ctable.component.html',
  styleUrls: ['./ctable.component.css']
})
export class CtableComponent implements OnInit {

  @Input()
  compesations: Compesation[] = [{}];
  compesationTotal: number = 0;
  constructor() {}

  ngOnInit(): void {}

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

  
  sumCompesation(val: number) {
    this.compesationTotal += val;
  }
}

