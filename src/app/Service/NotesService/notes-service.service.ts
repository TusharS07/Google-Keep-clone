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


  getAllNotes(){
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.GetService("notes/getNotesList", true, httpHeadersOption);

  }


  updateNotes(reqData: any){
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.PostService("notes/updateNotes", reqData, true, httpHeadersOption);
  }


  trashMoveNotes(reqData: any) {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.PostService("notes/trashNotes", reqData,true, httpHeadersOption);
  }


  getTrashNotesList(){
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }

    return this.HttpService.GetService("notes/getTrashNotesList", true, httpHeadersOption);
  }

  archiveMoveNotes(reqData: any) {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.PostService("notes/archiveNotes", reqData,true, httpHeadersOption);
  }

  getArchivNotesList(){
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }

    return this.HttpService.GetService("notes/getArchiveNotesList", true, httpHeadersOption);
  }

  deleteForeverNotes(reqData: any){
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.PostService("notes/deleteForeverNotes", reqData,true, httpHeadersOption);
  }

  changesColorNotes(reqData: any){
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.PostService("notes/changesColorNotes", reqData,true, httpHeadersOption);
  }
}
