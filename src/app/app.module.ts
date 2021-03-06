import { DetailedBlogModule } from './data-fetcher/detailed-blog.module';
import { BlogCardModule } from './data-fetcher/blog-card.module';
import { DetailedBlogService } from './data-fetcher/detailed-blog.service';
import { BlogCardService } from './data-fetcher/blog-card.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { BlogComponent } from './blog/blog.component';
import { FeedComponent } from './feed/feed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IFrameEmbedderComponent, SafePipe } from './iframe-embedder/iframe-embedder.component';

import { FusionChartsModule } from "angular-fusioncharts";
// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as TimeSeries from "fusioncharts/fusioncharts.timeseries";

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme, TimeSeries);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    FeedComponent,
    PageNotFoundComponent,
    IFrameEmbedderComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    BlogCardModule,
    DetailedBlogModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    FusionChartsModule
  ],
  providers: [
    BlogCardService,
    DetailedBlogService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
