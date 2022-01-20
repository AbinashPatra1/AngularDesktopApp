import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent implements OnInit {

  public chartOptions: EChartsOption = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getChartOptions();
  }

  public getChartOptions() {
    this.chartOptions = {
      title : {
        text : 'Test 1'
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
  }

  public showHome() {
    this.router.navigate(['home']);
  }

}
