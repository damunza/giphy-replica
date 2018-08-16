import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// import {Http, Response} from '@angular/http';//thursday

import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GiphyRequestService {
// http: HttpClient; // thursday
giph$

constructor(private http: HttpClient){
    // this.http = http; //thursday
}
// grequest(): Object {
//   return this.http.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=QqgBonqKBipnXU0gRrIuoXuwLc1rT4AK&limit=30')
// }

  giphyrequest(searchItem: HTMLInputElement):void{
    // console.log(${searchItem.value});
    var link= environment.apiUrl + searchItem.value
    return this.http.get(link).subscribe(data=>{
    this.giphy$=data.data;
    console.log(this.giphy$)
  });
  });

  }
  // interface ApiResponse{
  //   data.id:string;
  // }

  // let promise =new Promise((resolve,reject)=>{
  //       this.http.request(environment.apiUrl).subscribe((res:Response)=>{
  //         console.log(res.json());
  //         resolve()
  //       })
     //    this.http.get(environment.apiUrl).toPromise().then(response=>{
     //      resolve()
     //   }
     // )
