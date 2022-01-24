import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TestService } from './../services/test-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public columns: any = [];
  public rows: any = [];
  public filteredRows: any = [];
  public page: number;
  public pageSize: number;
  public searchValue: string = "";
  public datePipe = new DatePipe('en-IN');
  public isShowModal: boolean = false;
  public closeModal: string = '';

  constructor(private router: Router, private modalService: NgbModal, private testService: TestService) { }

  ngOnInit(): void {
    this.getColumns();
    this.getRows();
  }

  public getColumns() {
    this.columns = [
      {
        Name: "Id",
        Title: "Id"
      },
      {
        Name: "Name",
        Title: "Name"
      },
      {
        Name: "Age",
        Title: "Age"
      },
      {
        Name: "Voided_Volume",
        Title: "Voided Volume"
      },
      {
        Name: "Max_Flowrate",
        Title: "Max Flowrate"
      },
      {
        Name: "Avg_Flowrate",
        Title: "Avg Flowrate"
      },
      {
        Name: "Voiding_Time",
        Title: "Voiding Time"
      },
      {
        Name: "Flow_Time",
        Title: "Flow Time"
      },
      {
        Name: "Record_Date",
        Title: "Record Date"
      }];
  }

  public getRows() {
    this.rows = [
      {
        'Id': 1,
        'Name': 'Jane Doe',
        'Age': 24,
        'Voided_Volume': 5,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 5,
        'Voiding_Time': 10,
        'Flow-Time': 9,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 2,
        'Name': 'John Snow',
        'Age': 24,
        'Voided_Volume': 9,
        'Max_Flowrate': 6,
        'Avg_Flowrate': 3,
        'Voiding_Time': 80,
        'Flow_Time': 19,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 3,
        'Name': 'Harry Potter',
        'Age': 15,
        'Voided_Volume': 7,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 3,
        'Voiding_Time': 35,
        'Flow_Time': 18,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 4,
        'Name': 'Hermione Granger',
        'Age': 15,
        'Voided_Volume': 7,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 3,
        'Voiding_Time': 35,
        'Flow_Time': 18,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 5,
        'Name': 'Ron Weasley',
        'Age': 15,
        'Voided_Volume': 7,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 3,
        'Voiding_Time': 35,
        'Flow_Time': 18,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 6,
        'Name': 'Geralt Of Rivia',
        'Age': 38,
        'Voided_Volume': 7,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 3,
        'Voiding_Time': 35,
        'Flow_Time': 18,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 7,
        'Name': 'Cilrillia Of Cintra',
        'Age': 13,
        'Voided_Volume': 7,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 3,
        'Voiding_Time': 35,
        'Flow_Time': 18,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 6,
        'Name': 'Yennefer Of Vengeberg',
        'Age': 29,
        'Voided_Volume': 7,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 3,
        'Voiding_Time': 35,
        'Flow_Time': 18,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 6,
        'Name': 'Tony Stark',
        'Age': 33,
        'Voided_Volume': 7,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 3,
        'Voiding_Time': 35,
        'Flow_Time': 18,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 9,
        'Name': 'Peter Parker',
        'Age': 20,
        'Voided_Volume': 7,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 3,
        'Voiding_Time': 35,
        'Flow_Time': 18,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 10,
        'Name': 'Steve Rogers',
        'Age': 150,
        'Voided_Volume': 7,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 3,
        'Voiding_Time': 35,
        'Flow_Time': 18,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 11,
        'Name': 'Stephen Strange',
        'Age': 45,
        'Voided_Volume': 7,
        'Max_Flowrate': 5,
        'Avg_Flowrate': 3,
        'Voiding_Time': 35,
        'Flow_Time': 18,
        'Record_Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      }
    ];

    this.filteredRows = this.rows;
    this.page = 1;
    this.pageSize = 10;
  }

  public showTestDetails(event: any) {
    console.log(this.filteredRows.filter((arr, i) => i == event));
    this.testService.setPatientData(this.filteredRows.filter((arr, i) => i == event));
    this.router.navigate(['details']);
  }

  public createNewTest(event: any) {
    this.router.navigate(['newTest']);
  }

  public openModalPopup(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public getFilteredPatients() {
    this.filteredRows = this.rows.filter(s => s.Name.toLowerCase().includes(this.searchValue.toLowerCase()));
  }

}
