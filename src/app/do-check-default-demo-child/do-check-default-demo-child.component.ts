import {
  Component, OnInit, Input, SimpleChanges,
  OnChanges, DoCheck
} from '@angular/core';

@Component({
  selector: 'app-do-check-default-demo-child',
  templateUrl: './do-check-default-demo-child.component.html',
  styleUrls: ['./do-check-default-demo-child.component.css']
})
export class DoCheckDefaultDemoChildComponent implements OnInit,
  OnChanges, DoCheck {


  @Input()
  quantity: number;
  @Input()
  user: { name };

  price = 999;

  changeDetected = false;
  oldUserName = this.user && this.user.name;
  oldQuantity = this.quantity;
  oldPrice = this.price;

  noChangeCount = 0;

  constructor() {
    console.log('子组件 - constructor...');
  }

  ngOnInit() {
    console.log('子组件 - ngOnInit...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('子组件 - ngOnChanges...');
    console.log(JSON.stringify(changes, null, 2));
  }
  ngDoCheck(): void {
    if (this.user.name !== this.oldUserName) {
      this.changeDetected = true;
      console.log(`子组件 - DoCheck: user.name 变为 ${this.user.name} , 旧值: ${this.oldUserName}`);
      this.oldUserName = this.user.name;
    }
    if (this.quantity !== this.oldQuantity) {
      this.changeDetected = true;
      console.log(`子组件 - DoCheck: quantity 变为 ${this.quantity} , 旧值: ${this.oldQuantity}`);
      this.oldQuantity = this.quantity;
    }
    if (this.price !== this.oldPrice) {
      this.changeDetected = true;
      console.log(`子组件 - DoCheck: price 变为 ${this.price} , 旧值: ${this.oldPrice}`);
      this.oldPrice = this.price;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      const count = this.noChangeCount += 1;
      console.log(`子组件 - DoCheck 没有检测到变化,但仍被调用${count}次`);
    }
    this.changeDetected = false;
  }
}
