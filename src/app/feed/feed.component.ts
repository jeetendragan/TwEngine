import { Component, OnInit } from '@angular/core';
import { BlogCardModule } from '../data-fetcher/blog-card.module';
import { BlogCardService } from '../data-fetcher/blog-card.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ThemeService } from 'ng2-charts';
import { Color, Label } from 'ng2-charts';
import { SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  blogCards: BlogCardModule[];
  searchQuery: String;
  searchOptCountry: String;
  searchOptPoi: String;
  searchOptTopic: String;
  searchOptLang: String;
  tweetResults: any;
  searchStatus: String;
  poiOptions: any;
  newsResults: any;
  returnedTweets: any;
  topicOptions: any;
  sortByInfScore: boolean;

  public generalSentimentLabels: Label[] = ['Positive', 'Negative', 'Neutral'];
  public generalSentimentData: ChartDataSets[] = [
    { data: [95162, 53682, 20818], label: 'General sentiment for search' }
  ];
  chartOptions: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}

  public pieChartCountryTweetLabels: Label[] = ['Italy', 'United States', 'India', 'Others'];
  public pieChartCountryTweetData: SingleDataSet = [55330, 91458, 22874, 44];

  public tweetsByLangLabel: Label[] = ['English', 'Hindi', 'Italian', 'Others'];
  public tweetsByLangData: ChartDataSets[] = [
    { data: [95162, 53682, 20818, 133], label: 'Search results by language' }
  ];

  public barChartPoiSentimentLabels: Label[] = ['Modi', 'Trump'];
  public barChartPoiSentimentData: ChartDataSets[] = [
    { data: [65, 59], label: 'Positive' },
    { data: [65, 59], label: 'Neutral' },
    { data: [28, 48], label: 'Negative' }
  ];
  //public barChartPlugins = [pluginDataLabels];


  public tweetsByTopicLabel: Label[] = ['A', 'b', 'c', 'd'];
  public tweetsByTopicData: ChartDataSets[] = [
    { data: [95162, 53682, 20818, 133], label: 'Search results by Topic' }
  ];
  


  constructor(private blogCardDataService: BlogCardService, private router: Router, private http: HttpClient) {
    this.topicOptions = blogCardDataService.topics;
    this.sortByInfScore = false;
   }

  ngOnInit() {
    // call the API to get the blog card data
    this.blogCards = this.blogCardDataService.getBlogCards();
    this.poiOptions = this.blogCardDataService.getPois()
    console.log(this.poiOptions)
    this.searchQuery = ""
    this.tweetResults = null
    this.newsResults = null
    this.returnedTweets = null;

    this.tweetsByLangData = null;
    this.generalSentimentData = null;
    this.pieChartCountryTweetData = null;
    this.barChartPoiSentimentData = null;
    //this.tweetsByTopicData = null;
  }

  readBlog(blogId: string) {
    // this.router.navigate(['/blog/' + blogId]);
    this.router.navigateByUrl('/blog/' + blogId);
  }

  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  zeroSearchResults() {
    return this.returnedTweets != null && this.returnedTweets.length == 0
  }

  toggleSort(){
    if(this.sortByInfScore){
      // sort it by the normal score
      this.returnedTweets.sort((a, b) => (a.score > b.score) ? 1 : -1)
    }else{
      // sort it by the influence score
      this.returnedTweets.sort((a, b) => (a.influence_score > b.influence_score) ? 1 : -1)
    }
    this.sortByInfScore = !this.sortByInfScore;
  }

  fireSearch() {
    this.searchStatus = "Searching..."
    // var requestObject = {}
    if (this.searchQuery == undefined || this.searchQuery == null || this.searchQuery == "") {
      this.searchStatus = "Search bar is empty"
      return
    }

    this.tweetsByLangData = null;
    this.generalSentimentData = null;
    this.pieChartCountryTweetData = null;
    this.barChartPoiSentimentData = null;
    this.tweetsByTopicData = null;

    let httpParams = new HttpParams({
      fromObject: {
        query: this.searchQuery + "",
        topic: this.searchOptTopic + "",
        country: this.searchOptCountry + "",
        lang: this.searchOptLang + "",
        poi: this.searchOptPoi + ""
      }
    });

    console.log(httpParams)
    console.log("Result will appear after this:")
    this.http.get("http://35.175.211.148:8080/search", { params: httpParams }).subscribe(data => {
      console.log("Response: ")
      console.log(data)
      if (true) {
        this.isJson(data)
        this.tweetResults = data;
        if (this.tweetResults != null) {

          if ("searchResults" in this.tweetResults) {
            this.returnedTweets = this.tweetResults['searchResults']
          }

          if ("GeneralSentiment" in this.tweetResults) {
            let pos = this.tweetResults["GeneralSentiment"]['positive']
            let neg = this.tweetResults["GeneralSentiment"]['negative']
            let neu = this.tweetResults["GeneralSentiment"]['neutral']
            let sentdata = [pos, neg, neu]
            let o = { data: sentdata, label: 'General sentiment for search' }
            this.generalSentimentData = [o]
            console.log("General Sentiment")
            console.log(this.generalSentimentData)
          }

          if ("tweetPerCountry" in this.tweetResults) {
            let labels = ['India', 'Italy', 'USA']
            let twPerCountry = []
            let indTweetCnt = this.tweetResults['tweetPerCountry']['India']
            twPerCountry.push(indTweetCnt)
            let itTweetCnt = this.tweetResults['tweetPerCountry']['Italy']
            twPerCountry.push(itTweetCnt)
            let usTweetCnt = this.tweetResults['tweetPerCountry']['USA']
            twPerCountry.push(usTweetCnt)

            if ("others" in this.tweetResults['tweetPerCountry']) {
              let othersTweetCnt = this.tweetResults['tweetPerCountry']['others']
              twPerCountry.push(othersTweetCnt)
              labels.push("Others")
            }
            this.pieChartCountryTweetLabels = labels
            this.pieChartCountryTweetData = twPerCountry
          }

          if ("tweetPerLang" in this.tweetResults) {
            //  { data: [95162, 53682, 20818, 133], label: 'Search results by language' }
            // public tweetsByLangLabel: Label[] = ['English', 'Hindi', 'Italian', 'Others'];

            let data = []
            let en = this.tweetResults['tweetPerLang']['en']
            data.push(en)
            let hi = this.tweetResults['tweetPerLang']['hi']
            data.push(hi)
            let it = this.tweetResults['tweetPerLang']['it']
            data.push(it)
            let un = this.tweetResults['tweetPerLang']['und']
            data.push(un)
            let o = { data: data, label: 'Search results by language' }
            this.tweetsByLangData = [o]
          }
          let poiName = []
          let positiveSent = []
          let negSent = []
          let neuSent = []

          if ("PoiSentiment" in this.tweetResults) {
            for (let poi in this.tweetResults['PoiSentiment']) {
              poiName.push(poi)
              console.log("POISEnti")
              console.log(poi)

              let poiSent = this.tweetResults['PoiSentiment'][poi]
              let pos = poiSent['positive']
              positiveSent.push(pos)

              let neg = poiSent['negative']
              negSent.push(neg)

              let neu = poiSent['neutral']
              neuSent.push(neu)
            }

            if(poiName.length > 0){
              this.barChartPoiSentimentLabels = poiName
              let obj1 = { data: positiveSent, label: 'Positive' }
              let obj2 = { data: negSent, label: 'Negative' }
              let obj3 = { data: neuSent, label: 'Neutral' }
              this.barChartPoiSentimentData = [obj1, obj2, obj3]
              
            }
          }

          if("tweetPerTopic" in this.tweetResults){
            let labels = []
            let count = []
            for(let topicIndex in this.tweetResults['tweetPerTopic']){
              labels.push(this.topicOptions[topicIndex])
              count.push(this.tweetResults['tweetPerTopic'][topicIndex])
            }
            console.log(labels)
            console.log(count)
            let o = { data: count, label: 'Search results by Topic' }
            this.tweetsByTopicData = [o]
            this.tweetsByTopicLabel = labels

          }

        }
        this.searchStatus = ""
      } else {
        this.tweetResults = []
        this.searchStatus = data + ""
      }
    },
      error => {
        console.log("Error: " + error)
        this.searchStatus = "Error"
      })


    let httpParamsNews = new HttpParams({
      fromObject: {
        q: this.searchQuery + "",
        sortBy: 'popularity',
        apiKey: 'c6bd6ed91fcc4c16b045b28bc78bd923'
      }
    });


    this.http.get("http://newsapi.org/v2/everything", { params: httpParamsNews }).subscribe(data => {
      if (true) {
        this.isJson(data)
        this.newsResults = data['articles'];
      } else {
        this.newsResults = []
        // this.searchStatus = data+""
      }
      console.log("News API Response: ")
      console.log(data)
    },
      error => {
        console.log("Error: " + error)
        this.searchStatus = "Error"
      })

  }
}
