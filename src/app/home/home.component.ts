import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public columns: any = [];
  public rows: any = [];
  public datePipe = new DatePipe('en-IN');
  public isShowModal: boolean = false;
  public closeModal: string = '';

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getColumns();
    this.getRows();
  }

  public getColumns() {
    this.columns = ["Id", "Name", "Age", "Voided Volume", "Max Flowrate", "Avg Flowrate", "Voiding Time", "Flow Time", "Record Date"];
  }

  public getRows() {
    this.rows = [
      {
        'Id': 1,
        'Name': 'Jane Doe',
        'Age': 24,
        'Voided Volume': 5,
        'Max Flowrate': 5,
        'Avg Flowrate': 5,
        'Voiding Time': 10,
        'Flow Time': 9,
        'Record Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 1,
        'Name': 'John Snow',
        'Age': 24,
        'Voided Volume': 9,
        'Max Flowrate': 6,
        'Avg Flowrate': 3,
        'Voiding Time': 80,
        'Flow Time': 19,
        'Record Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      },
      {
        'Id': 1,
        'Name': 'Harry Potter',
        'Age': 15,
        'Voided Volume': 7,
        'Max Flowrate': 5,
        'Avg Flowrate': 3,
        'Voiding Time': 35,
        'Flow Time': 18,
        'Record Date': this.datePipe.transform(new Date(), 'dd/MM/yyyy')
      }
    ];
  }

  public showTestDetails() {
    this.router.navigate(['details']);
  }

  public createNewTest() {
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

}
