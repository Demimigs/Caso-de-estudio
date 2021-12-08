import { HttpClient } from '@angular/common/http';
import Compesation from '../Clases/compesation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crange',
  templateUrl: './crange.component.html',
  styleUrls: ['./crange.component.css']
})
export class CrangeComponent implements OnInit {

  compesations: Compesation[] = [];
  employeeID = this.route.snapshot.queryParams['id'];
  startYear = this.route.snapshot.queryParams['startYear'];
  startMonth = this.route.snapshot.queryParams['startMonth'];
  endYear = this.route.snapshot.queryParams['endYear'];
  endMonth = this.route.snapshot.queryParams['endMonth'];

  compesationExists: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCompesations();
  }

  private fetchCompesations() {
    this.http
      .get(
        `http://localhost:8080/apis/compesationbyrange?id=${this.employeeID}&startMonth=${this.startMonth}&startYear=${this.startYear}&endMonth=${this.endMonth}&endYear=${this.endYear}`
      )
      .subscribe((compesationRes) => {
        this.compesations = <Compesation[]>compesationRes;
        if (this.compesations!.length > 0) this.compesationExists = true;
        if (this.compesations!.length > 1) {
          this.compesations!.sort((a, b) => {
            if (a.year === b.year) {
              return a.month! - b.month!;
            }
            return a.year! > b.year! ? 1 : -1;
          });
        }
      });
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
