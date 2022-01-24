import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Router } from '@angular/router';
import { TestService } from './../services/test-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent implements OnInit {

  public patientForm = new FormGroup({
    patientName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    gender: new FormControl(''),
    remarks: new FormControl('')
  });

  public patientData : any = {
    patientName : null,
    dateOfBirth : null,
    gender : null,
    remarks : null
  }

  public genders: any = [];
  public selectedGender: any;
  public volumeChartOptions: EChartsOption = {};
  public flowChartOptions: EChartsOption = {};

  constructor(private router: Router, private testService: TestService) { }

  ngOnInit(): void {
    this.genders = [
      {
        Id: 1,
        Name: 'Male'
      },
      {
        Id: 1,
        Name: 'Female'
      },
      {
        Id: 1,
        Name: 'Others'
      }
    ];
    this.getPatientData();
    this.getChartOptions();
  }

  public getChartOptions() {
    this.volumeChartOptions = {
      title: {
        text: 'Volume Test'
      },
      legend: {
        data: ['Standard Result', 'Test Result']
      },
      tooltip: {

      },
      xAxis: {
        type: 'category',
        name: 'Time(10 secs/div)',
        nameLocation: 'middle',
        nameGap: 40,
        boundaryGap: false,
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      },
      yAxis: {
        type: 'value',
        name: 'Volume(200 ml/div)',
        nameGap: 40,
        nameLocation: 'middle'
      },
      series: [{
        data: [820, 932, 901, 934],
        type: 'line',
        areaStyle: {}
      }]
    }

    this.flowChartOptions = {
      title: {
        text: 'Flowrate Test'
      },
      legend: {
        data: ['Standard Result', 'Test Result']
      },
      tooltip: {

      },
      xAxis: {
        type: 'category',
        name: 'Time(10 secs/div)',
        nameLocation: 'middle',
        nameGap: 40,
        boundaryGap: false,
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      },
      yAxis: {
        type: 'value',
        name: 'Flowrate(10 ml/sec/div)',
        nameGap: 40,
        nameLocation: 'middle'
      },
      series: [{
        data: [820, 932, 901, 934],
        type: 'line',
        areaStyle: {}
      }]
    }
  }

  public showHome() {
    this.router.navigate(['home']);
  }

  public getPatientData() {
    var data = this.testService.getPatientData();
    if(data !== null && data.legend != 0)
    {
      this.patientData.patientName = data[0].Name;
      this.patientData.dateOfBirth = data[0].dateOfBirth;
      this.patientData.gender = data[0].gender; 
      this.patientData.remarks = data[0].remarks; 
    }
  }

}
