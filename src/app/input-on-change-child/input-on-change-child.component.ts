import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-on-change-child',
  templateUrl: './input-on-change-child.component.html',
  styleUrls: ['./input-on-change-child.component.css']
})
export class InputOnChangeChildComponent implements OnInit, OnChanges {

  @Input()
  price: number;
  @Input()
  amount: number;

  changeLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const log: string[] = [];
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`${propName} 的初始值为 ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} 从 ${from} 变为 ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
