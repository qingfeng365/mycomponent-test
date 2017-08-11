import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view-child-demo',
  templateUrl: './main-view-child-demo.component.html',
  styleUrls: ['./main-view-child-demo.component.css']
})
export class MainViewChildDemoComponent implements OnInit {

  showdemo1 = false;
  showdemo2 = false;
  showdemo3 = false;

  constructor() { }

  ngOnInit() {
  }

}
