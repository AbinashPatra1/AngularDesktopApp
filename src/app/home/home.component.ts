import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public columns: any = [];
  public rows: any = [];
  public datePipe = new DatePipe('en-IN');

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.getColumns();
    this.getRows();
  }

  public getColumns() {
    this.columns = ["Id", "Name", "Age", "Voided Volume", "Max Flowrate", "Avg Flowrate", "Voiding Time", "Flow Time","Record Date"];
  }

  public getRows() {
    this.rows = [
      {
        'Id': 1,
        'Name': 'Jane Doe',
        'Age': 24,
        'Voided Volume' : 5,
        'Max Flowrate' : 5,
        'Avg Flowrate' : 5,
        'Voiding Time' : 10,
        'Flow Time' : 9,
        'Record Date' : this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      }
    ];
  }

  public showTestDetails()
  {
    this.router.navigate(['details']);
  }

}
