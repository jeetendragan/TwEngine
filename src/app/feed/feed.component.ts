import { Component, OnInit } from '@angular/core';
import { BlogCardModule } from '../data-fetcher/blog-card.module';
import { BlogCardService } from '../data-fetcher/blog-card.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

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
  result: any;
  fakeArray: any;

  constructor(private blogCardDataService: BlogCardService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    // call the API to get the blog card data
    this.blogCards = this.blogCardDataService.getBlogCards();
    this.searchQuery = "Hello, world"
    this.searchOptCountry = null
    this.fakeArray = new Array(12);
  }

  readBlog(blogId: string) {
    // this.router.navigate(['/blog/' + blogId]);
    this.router.navigateByUrl('/blog/' + blogId);
  }

  fireSearch(){
    var requestObject = {
        "query": this.searchQuery,
        "poi": this.searchOptPoi == undefined ? null : this.searchOptPoi,
        "topic": this.searchOptTopic == undefined ? null : this.searchOptTopic,
        "country" : this.searchOptCountry == undefined ? null : this.searchOptCountry,
        "lang": this.searchOptLang == undefined ? null : this.searchOptLang  
    }
    let httpParams = new HttpParams();
    httpParams.append("body", JSON.stringify(requestObject));
    console.log(requestObject)
    this.http.get("http://34.239.175.103:8080/", { params: httpParams }).subscribe(data => {
      this.result = data;
      console.log(this.result)
    })
  }
}
