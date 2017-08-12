import { ViewChild, ElementRef } from '@angular/core';
import {
  Component, OnInit, AfterViewInit,
  AfterViewChecked, DoCheck,
  AfterContentChecked, AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-content-demo-parent',
  templateUrl: './content-demo-parent.component.html',
  styleUrls: ['./content-demo-parent.component.css']
})
export class ContentDemoParentComponent implements OnInit,
  AfterViewInit, AfterViewChecked, DoCheck,
  AfterContentChecked, AfterContentInit {

  hasChild = false;
  message = '';
  qty = 100;

  @ViewChild('qtyinput')
  qtyinputvar: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  createChild() {
    this.hasChild = !this.hasChild;
  }
  ngDoCheck(): void {
    console.log('父组件 DoCheck ... ');
  }
  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检测完毕 ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕 ngAfterViewInit');
  }
  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完毕 ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('父组件投影内容变更检测完毕 ngAfterContentChecked');
    console.log('父组件qty: ' + this.qty);
  }

  show(msg) {
    console.dir(msg);
  }
}
