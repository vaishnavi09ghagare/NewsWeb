import { Component,OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-entertaiment',
  templateUrl: './entertaiment.component.html',
  styleUrls: ['./entertaiment.component.css']
})
export class EntertaimentComponent implements OnInit {
  
  constructor(private es:NewsapiService){}

  entertaimentDisplay:any[]=[];
  ngOnInit(): void {
    this.es.entertaimentHeadings().subscribe((result=>{
      console.log(result);
      this.entertaimentDisplay=result.articles;

  }))
  }

}
