import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public patientData: any = {};

  constructor() { }

  public getPatientData() {
    return this.patientData;
  }

  public setPatientData(data: any) {
    this.patientData = data;
  }
}
