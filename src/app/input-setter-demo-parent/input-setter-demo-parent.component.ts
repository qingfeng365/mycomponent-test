import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-setter-demo-parent',
  templateUrl: './input-setter-demo-parent.component.html',
  styleUrls: ['./input-setter-demo-parent.component.css']
})
export class InputSetterDemoParentComponent implements OnInit {
  stockCode = '';
  amount = 0;

  constructor() { }

  ngOnInit() {
  }

}
