import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const headers = { 'Content-Type': 'application/json'};

@Injectable({
  providedIn: 'root'
})

   
export class HttphandlerserviceService {

  constructor(private http:HttpClient) { }
       
  apiurl = "https://x6wm0p4lcj.execute-api.us-east-2.amazonaws.com/dev"

  
  postreq(data:string){
  console.log(data)
  return this.http.post(this.apiurl, {"base64img":data}, {headers})
  }
}
