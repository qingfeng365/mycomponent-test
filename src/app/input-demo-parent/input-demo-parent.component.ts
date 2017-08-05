import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-demo-parent',
  templateUrl: './input-demo-parent.component.html',
  styleUrls: ['./input-demo-parent.component.css']
})
export class InputDemoParentComponent implements OnInit {
  stockCode = '';
  amount = 0;
  constructor() { }

  ngOnInit() {
  }

}
