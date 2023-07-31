import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service'; 

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit{

  constructor(private bs:NewsapiService ){}

  businessDisplay:any[]=[];
  ngOnInit(): void {
    
    this.bs.businessheadings().subscribe((result=>{
      console.log(result);
      this.businessDisplay=result.articles;
    }))

  }



}
