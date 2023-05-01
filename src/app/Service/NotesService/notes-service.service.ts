import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  token: any

  constructor(private HttpService: HttpService) { }


  createNote(reqData: any) {

    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.PostService("notes/addNotes", reqData, true, httpHeadersOption);
  }
}
