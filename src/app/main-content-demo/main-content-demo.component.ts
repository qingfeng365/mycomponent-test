import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content-demo',
  templateUrl: './main-content-demo.component.html',
  styleUrls: ['./main-content-demo.component.css']
})
export class MainContentDemoComponent implements OnInit {
  showdemo1 = false;
  showdemo2 = false;
  constructor() { }

  ngOnInit() {
  }

}
