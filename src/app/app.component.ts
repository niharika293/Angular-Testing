import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';

  constructor(private sharedService : SharedService){
  }

  getProcessedData(){
    return this.sharedService.getData()+" processed";
  }
}
