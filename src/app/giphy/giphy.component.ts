import { Component, OnInit } from '@angular/core';

import {GiphyRequestService} from '../giphy-http/giphy-request.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  // providers:[GiphyRequestService],
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  giphy$: string[],
  link ='http://api.giphy.com/v1/gifs/search?api_key=QqgBonqKBipnXU0gRrIuoXuwLc1rT4AK&q=';
  // public giphs,
  constructor(public giphyrequest: GiphyRequestService, private http:HttpClient){} //second trial

//entering the search function
giphysearch(searchItem: HTMLInputElement):void{

  var apiLink= this.link + searchItem.value
   this.http.get(apiLink).subscribe((res:Response)=>{
  this.giphy$=res['data'];
  console.log(this.giphy$);
});
}

  ngOnInit() {

    this.http.get('http://api.giphy.com/v1/gifs/trending?api_key=QqgBonqKBipnXU0gRrIuoXuwLc1rT4AK&limit=30').subscribe(data=>{
      this.giphy$=data.data;
      console.log(this.giphy$)

  })
  // this.giphyrequest.giphyrequest().subscribe(function(data){
  //   this.giphs = data;
  //   console.log(this.giphs.data[0].embed_url)
  // })
}
}

  // gif:any
//comment out line 19,20,25,

  // giphyrequest(searchItem: HTMLInputElement):void{
  //   console.log(`user entered: ${searchItem.value}`);
  //   // this.Giphs.giphyrequest() = this.giphs;
  //   // this.giphs = this.giphyrequest.giphyrequest()
  //   console.log(this.giphs)
  //  }

  // constructor(public Giphs: GiphyRequestService) { } //first trial

    // this.http.get('http://api.giphy.com/v1/gifs/trending?api_key=QqgBonqKBipnXU0gRrIuoXuwLc1rT4AK&limit=30').subscribe(data=>{
    //   this.giphy$=data.data;
    //   console.log(this.giphy$)


    // this.giphs = this.giphyrequest.grequest()// attempt 2
    // this.giphs = this.giphyrequest.giphyrequest()// attempt 3
    // this.giphyService.giphyrequest()
    // this.giphy=this.giphyService.giphy
