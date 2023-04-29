import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: any

  constructor(private HttpService: HttpService) { }



  registerUser(reqdata: any) {

    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.PostService("user/userSignUp", reqdata, false, httpHeadersOption);
  }

  login(reqdata: any) {

    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }

    return this.HttpService.PostService("user/login", reqdata, false, httpHeadersOption);
  }

  reset(reqdata: any) {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }

    return this.HttpService.PostService("user/reset", reqdata, false, httpHeadersOption);
  }

  forgotPassword(reqdata: any) {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }

    return this.HttpService.PostService("user/reset-password", reqdata, false, httpHeadersOption);
  }
}
