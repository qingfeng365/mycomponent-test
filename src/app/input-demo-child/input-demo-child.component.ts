import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-demo-child',
  templateUrl: './input-demo-child.component.html',
  styleUrls: ['./input-demo-child.component.css']
})
export class InputDemoChildComponent implements OnInit {

  @Input()
  stockCode: string;
  @Input()
  amount: number;

  constructor() { }

  ngOnInit() {
  }

}
