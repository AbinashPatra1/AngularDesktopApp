import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.scss']
})
export class NewTestComponent implements OnInit {

  public genders :any = [];
  public selectedGender : any;
  public volumeChartOptions: EChartsOption = {};
  public flowChartOptions: EChartsOption = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.genders = [
      {
        Id : 1,
        Name : 'Male'
      },
      {
        Id : 1,
        Name : 'Female'
      },
      {
        Id : 1,
        Name : 'Others'
      }
    ];
    this.getChartOptions();
  }

  public getChartOptions() {
    this.volumeChartOptions = {
      title : {
        text : 'Volume Test'
      },
      legend : {
        data : ['Standard Result', 'Test Result']
      },
      tooltip : {

      },
      xAxis: {
        type: 'category',
        name : 'Time(10 secs/div)',
        nameLocation : 'middle',
        nameGap : 40,
        boundaryGap: false,
        data: [10,20,30,40,50,60,70,80,90,100]
      },
      yAxis: {
        type: 'value',
        name : 'Volume(200 ml/div)',
        nameGap : 40,
        nameLocation : 'middle'
      },
      series: [{
        data: [820, 932, 901, 934],
        type: 'line',
        areaStyle: {}
      }]
    }

    this.flowChartOptions = {
      title : {
        text : 'Flowrate Test'
      },
      legend : {
        data : ['Standard Result', 'Test Result']
      },
      tooltip : {

      },
      xAxis: {
        type: 'category',
        name : 'Time(10 secs/div)',
        nameLocation : 'middle',
        nameGap : 40,
        boundaryGap: false,
        data: [10,20,30,40,50,60,70,80,90,100]
      },
      yAxis: {
        type: 'value',
        name : 'Flowrate(10 ml/sec/div)',
        nameGap : 40,
        nameLocation : 'middle'
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
}
