import { Injectable } from '@angular/core';
import { BlogCardModule } from './blog-card.module';

@Injectable({
  providedIn: 'root'
})
export class BlogCardService {

  blogCards: BlogCardModule[] = [
    {
      id: 'e5881692-1f14-11eb-adc1-0242ac120002',
      header: 'Paper Presentation- Ocean Vista',
      caption: 'Gossip-Based Visibility Control for Speedy Geo-Distributed Transactions(VLDB)',
      summary: '<ul>' +
              '<li>Paper by researchers at Alibaba and University of Waterloo</li>' +
              '<li>How does ocean-vista solve the problem of geo-distributed transactions?</li>' +
              '<li>How does it compare to one other state-of-the-art transaction processing system(TAPIER)?</li>' +
              '</ul>'
    },
    {
      id: 'b49b4331-3b2d-485e-b8ae-f19c93e448f6',
      header: 'AI Search',
      caption: 'Search solutions intelligently!',
      summary: '<ul>' +
              '<li>Introduces AI search</li>' +
              '<li>Why computer scientists call it the "AI" search?</li>' +
              '<li>Run AI search algorithms on a simulator</li></ul>'
    },
    {
      id: '404fc0fe-c60b-4272-a754-a01f163ddf10',
      header: 'Taylor Series',
      caption: 'Get the intuition behind the Taylor series!',
      summary: '<ul>' +
              '<li>What is a Taylor Series?</li>' +
              '<li>How is a Taylor series used?</li>' +
              '<li>How is the Taylor series formula derived?</li><ul>'
    }
  ];

  constructor() { }

  public getBlogCards(): BlogCardModule[] {
    return this.blogCards;
  }

  public getBlogCard(blogId: string): BlogCardModule {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.blogCards.length; i++){
      if (this.blogCards[i].id === blogId) {
        return this.blogCards[i];
      }
    }

    return null;
  }

  pois = {
    "drharshvardhan" : "Dr. Harsh Vardhan",
    "RahulGandhi" : "Rahul Gandhi",
    "PiyushGoyal" : "Piyush Goyal",
    "realDonaldTrump" : "Donald Trump",
    "NYGovCuomo" : "Andrew Cuomo",
    "CDCgov" : "CDC",
    "MinisteroSalute" : "Italian Health Ministry",
    "matteosalvinimi" : "Matteo Salvini",
    "matteorenzi" : "Matteo Renzi",
    "KamalaHarris" : "Kamala Harris",
    "JoeBiden": "Joe Biden",
    "GiorgiaMeloni": "Giorgia Meloni", 
    "Narendramodi" : "Narendra Modi",
    "AmitShah": "Amit Shah",
    "ArvindKejriwal": "Arvind Kejriwal",
    "HillaryClinton":"Hillary Clinton",
    "BernieSanders": "Bernie Sanders",
    "GiuseppeConteIT": "Giuseppe ConteIT",
    "lauraboldrini": "Laura Boldrini",
    "rajnathsingh": "Rajnath Singh"
 }
 
 public getPois(){
   // returns an array of objects, with each object having the handle, and the Person's name
   var poiArray = []
   for(let poiHandle in this.pois){
     let poiName = this.pois[poiHandle]
     var ob = {
        'poi_handle': poiHandle,
        'poi_name': poiName
     }
     poiArray.push(ob)
   }
   return poiArray
 }

 chartData = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];

public getDumyData(){
  return this.chartData;
}
usPois = ['CDCgov', 'Joe Biden', 'Kamala Harris', 'Cuomo', 'Trump']
inPois = ['Amit Shah', 'Harsh Vardhan', 'Narendra Modi', 'Piyush Goyal', 'Rajnath Singh']
itPois = ['Giorgia Meloni', 'Laura Boldrini', 'Matteo Renzi', 'Matteo Salvinimi', 'Ministero Salute']

topics = [
  "governo",
  "trump",
  "covid",
  "government",
  "death",
  "delhi",
  "india",
  "narendramodi",
  "mask",
  "address",
  "coronavirus",
  "case",
  "test",
  "nation",
  "america",
  "protect",
  "virus",
  "lockdown",
  "great",
  "realdonaldtrump"]

getTopics(){
  return this.topics;
}

getPoisByCountry(country){
  if(country == "us"){
    return this.usPois;
  }
  if(country == "in"){
    return this.inPois;
  }
  if(country == "it"){
    return this.itPois;
  }
  return null;
}

}
