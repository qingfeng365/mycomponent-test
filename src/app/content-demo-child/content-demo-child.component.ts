import { ViewChild, ElementRef } from '@angular/core';
import { MyinputDirective } from '../myinput.directive';
import {
  Component, OnInit, AfterViewInit,
  AfterViewChecked, DoCheck,
  AfterContentChecked, AfterContentInit, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-content-demo-child',
  templateUrl: './content-demo-child.component.html',
  styleUrls: ['./content-demo-child.component.css']
})
export class ContentDemoChildComponent implements OnInit,
  AfterViewInit, AfterViewChecked, DoCheck,
  AfterContentChecked, AfterContentInit {
  qty = 10;

  @ViewChild('qtyinput')
  qtyinputvar: ElementRef;

  @ContentChild(MyinputDirective)
  qtyinputvarContent: MyinputDirective;

  constructor() { }

  ngOnInit() {
  }
  ngDoCheck(): void {
    console.log('子组件 DoCheck ');
  }
  ngAfterViewInit(): void {
    console.log('子组件的视图初始化完毕 ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('子组件的视图变更检测完毕 ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('子组件投影内容初始化完毕 ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('子组件投影内容变更检测完毕 ngAfterContentChecked');
    console.log('子组件qty: ' + this.qty);
  }
  show(msg) {
    console.dir(msg);
  }
}
