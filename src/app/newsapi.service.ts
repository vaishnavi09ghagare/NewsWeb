import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }
  
  //newsApiUrl
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=6fd308617354445c957485178bee87b6";

  //newsHeading
  topheadings():Observable<any>{
    return this.http.get(this.newsApiUrl);
  }

  //technewsApi
  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6fd308617354445c957485178bee87b6";

  //techheadings
  techheadings():Observable<any>{
    return this.http.get(this.techApiUrl);
  }

  //businessApi
  businessUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6fd308617354445c957485178bee87b6";

  //businessheadings
  businessheadings():Observable<any>{
    return this.http.get(this.businessUrl);
  }

  //sportsApi
  sportsUrl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6fd308617354445c957485178bee87b6 ";
  
  //sportsheadings
  sportsheadings():Observable<any>{
    return this.http.get(this.sportsUrl);
  }

  //entertaiments
  entertainmentUrl="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6fd308617354445c957485178bee87b6";

  entertaimentHeadings():Observable<any>{
    return this.http.get(this.entertainmentUrl);
  }

}
