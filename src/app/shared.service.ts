import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console.log("inside constructor : shared service");
  }

  mySharedFunction(){
    console.log("Inside myShared()");
  }

  getData(){
    return ("real data");
  }
}
