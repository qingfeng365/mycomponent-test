import { Component, OnInit, DoCheck } from '@angular/core';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-do-check-immutable-demo-parent',
  templateUrl: './do-check-immutable-demo-parent.component.html',
  styleUrls: ['./do-check-immutable-demo-parent.component.css']
})
export class DoCheckImmutableDemoParentComponent implements OnInit,
  DoCheck {

  quantity = 100;
  user = Immutable.Map({
    name: '张三'
  });
  hasChild = false;

  changeDetected = false;
  oldUserName = this.user.get('name');
  oldQuantity = this.quantity;

  noChangeCount = 0;

  constructor() { }

  ngOnInit() {

  }
  createChild() {
    this.hasChild = true;
  }
  ngDoCheck(): void {
    if (this.user.get('name') !== this.oldUserName) {
      this.changeDetected = true;
      console.log(`父组件 - DoCheck: user.name 变为 ${this.user.get('name')} , 旧值: ${this.oldUserName}`);
      this.oldUserName = this.user.get('name');
    }
    if (this.quantity !== this.oldQuantity) {
      this.changeDetected = true;
      console.log(`父组件 - DoCheck: quantity 变为 ${this.quantity} , 旧值: ${this.oldQuantity}`);
      this.oldQuantity = this.quantity;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      const count = this.noChangeCount += 1;
      console.log(`父组件 - DoCheck 没有检测到变化,但仍被调用${count}次`);
    }
    this.changeDetected = false;
  }

  updateUsername(value: string) {
    this.user = this.user.set('name', value);
  }

}
