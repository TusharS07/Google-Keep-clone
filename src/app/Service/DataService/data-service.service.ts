import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject([]);
  receiveSearchValue = this.messageSource.asObservable();

  constructor() { }

  sendSearchValue(data: any) {
    console.log(data);
    
    this.messageSource.next(data)
  }
}
