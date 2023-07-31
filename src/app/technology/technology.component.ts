import { Component,OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit{

  constructor (private ts:NewsapiService){}

  technewsDisplay:any[]=[];
  ngOnInit(): void {

    this.ts.techheadings().subscribe((result=>{
      console.log(result);
        this.technewsDisplay=result.articles;
    }))

  }

}
