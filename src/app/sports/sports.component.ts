import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit{

  constructor(private sn:NewsapiService){}

  sportsDisplay:any[]=[];
  ngOnInit(): void {
    
    this.sn.sportsheadings().subscribe((result=>{
      console.log(result);
      this.sportsDisplay=result.articles;
  }));

}
}
