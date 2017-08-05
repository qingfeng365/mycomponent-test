import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-setter-demo-child',
  templateUrl: './input-setter-demo-child.component.html',
  styleUrls: ['./input-setter-demo-child.component.css']
})
export class InputSetterDemoChildComponent implements OnInit {
  @Input()
  stockCode: string;

  _amount = 0;

  @Input()
  set amount(value: number) {
    if (!value) {
      this._amount = value * 100;
    } else {
      this._amount = 0;
    }
  }
  get amount(): number {
    return this._amount;
  }

  constructor() { }

  ngOnInit() {
  }

}
