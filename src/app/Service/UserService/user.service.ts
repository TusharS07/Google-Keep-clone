import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpService: HttpService) { }

  registerUser(reqdata:any) {
   return this.HttpService.PostService("user/userSignUp",reqdata, false, {});
  }

  login(reqdata:any) {
    return this.HttpService.PostService("user/login",reqdata, false, {});
   }
}
