import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  /*public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: true
  };*/
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];



  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Italy','United States', 'India'];
  public pieChartData: SingleDataSet = [55330, 91458, 22874];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];



  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['English', 'Italian', 'Hindi', 'Other'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [95162, 53682, 20818, 1133], label: 'Tweets by language' }
  ];



  public barChartLabels2: Label[] = ["pandemia", "government", "covid", "trump", "vaccine", "american", "coronavirus", "mask", "governor", "india", "news", "italy", "health", "biden", "lie", "protect", "change", "time", "fauci", "stop"];
  public barChartData2: ChartDataSets[] = [
    { data: [22523, 9458, 40105, 4681, 5590, 13935, 4148, 2739, 2739, 5728, 3591, 12196, 4325, 5116, 5991, 2474, 13449, 1918, 2961, 2926], label: 'Important Topics' }
  ]


  constructor() { }

  ngOnInit() {
  }

}
