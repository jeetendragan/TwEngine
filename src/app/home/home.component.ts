import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import * as FusionCharts from 'fusioncharts';
import { Color, Label } from 'ng2-charts';
import { SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { BlogCardModule } from '../data-fetcher/blog-card.module';
import { BlogCardService } from '../data-fetcher/blog-card.service';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import usTime   from "../../assets/usTimeline.json";
import inTime   from "../../assets/inTimeline.json";
import itTime   from "../../assets/itTimeline.json";

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

  dataSourceUsa: any;
  dataSourceIn:any;
  dataSourceIt:any;
  type: string;
  width: string;
  height: string;
  
  constructor(private blogCardDataService: BlogCardService, private http: HttpClient) {

    console.log("US time!")
    console.log(usTime)
    
    // this.fetchData()
    console.log("Time series data")

    this.type = "timeseries";
    this.width = "100%";
    this.height = "900";
    this.dataSourceUsa = {
      caption: {
        text: "Covid Cases to POI Tweet Analysis for USA"
      },
      chart: {
        theme: "fusion"
      },
      data: null,
      yaxis: null
    };
    this.dataSourceIn = {
      caption: {
        text: "Covid Cases to POI Tweet Analysis for India"
      },
      chart: {
        theme: "fusion"
      },
      data: null,
      yaxis: null
    }
    this.dataSourceIt = {
      caption: {
        text: "Covid Cases to POI Tweet Analysis for Italy"
      },
      chart: {
        theme: "fusion"
      },
      data: null,
      yaxis: null
    }
    
    this.fetchData("us")
    this.fetchData("in")
    this.fetchData("it")
  }

  fetchData(country) {

      let usPois = this.blogCardDataService.getPoisByCountry(country);
      let usTimeline;
      if(country == "us"){
        usTimeline = usTime
      }
      if(country == "it"){
        usTimeline = itTime
      }
      if(country == "in"){
        usTimeline = inTime
      }
      let usSchema = []
      usSchema.push({
        "name": "Date",
        "type": "date",
        "format": "%Y-%m-%d"
      })
      usSchema.push({
        "name": "Cases",
        "type": "number"
      })
      usSchema.push({
        "name": "Deaths",
        "type": "number"
      })

      let yaxis = []
      yaxis.push({
        plot: [
          {
            value: "Cases",
          }
        ],
        title: "Cases"
      })
      yaxis.push({
        plot: [
          {
            value: "Deaths",
          }
        ],
        title: "Deaths"
      })

      for(let poi of usPois){
          console.log(poi)
          let ob = {
            "name" : poi,
            "type" : "number"
          }
          usSchema.push(ob)
          let obj = {
            plot: [
              {
                value: poi,
              }
            ],
            title: poi
          }
          yaxis.push(obj)
      }

      console.log(usSchema)

      let fusionTable = new FusionCharts.DataStore().createDataTable(
        usTimeline,
        usSchema
      ); // Instance of DataTable to be passed as data in dataSource
      if(country == "us"){
        this.dataSourceUsa.data = fusionTable;
        this.dataSourceUsa.yaxis = yaxis;
      }
      if(country == "in"){
        this.dataSourceIn.data = fusionTable;
        this.dataSourceIn.yaxis = yaxis;
      }
      if(country == "it"){
        this.dataSourceIt.data = fusionTable
        this.dataSourceIt.yaxis = yaxis;
      }
    //});
  }

  ngOnInit() {
  }

}
