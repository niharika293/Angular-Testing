import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  // Since we're injecting sharedService here, so sharedService is the dependency service. 
  constructor(private sharedService : SharedService) { }

  multiply(num1: number, num2: number){
    this.sharedService.mySharedFunction();
    return num1 * num2;
  }

  add(num1: any , num2: any){
    this.sharedService.mySharedFunction();
    return num1+ num2;
  }
}
