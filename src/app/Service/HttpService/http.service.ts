import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';

  constructor(private httpClient : HttpClient) {}

  

  PostService(url: string, reqPayload: any, token:boolean, httpAuthOptions: any) {
    return this.httpClient.post(this.baseUrl +url, reqPayload, token && httpAuthOptions);
  }
}
