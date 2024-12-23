import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  btnText : string = "Subscribe";
  subscribed : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  subscribe(){
    this.subscribed = true;
    this.btnText = "Unsubscribe";
  }
}
