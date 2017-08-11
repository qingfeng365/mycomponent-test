import {
  Component, OnInit, AfterViewInit,
  AfterViewChecked, ViewChild, DoCheck
} from '@angular/core';
import { AfterViewDemoChildComponent } from '../after-view-demo-child/after-view-demo-child.component';

@Component({
  selector: 'app-after-view-demo-parent',
  templateUrl: './after-view-demo-parent.component.html',
  styleUrls: ['./after-view-demo-parent.component.css']
})
export class AfterViewDemoParentComponent implements OnInit, AfterViewInit, AfterViewChecked, DoCheck {

  message: string;
  message1: string;
  @ViewChild('child1')
  child1: AfterViewDemoChildComponent;

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    console.log('父组件 DoCheck ... ');
  }
  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检测完毕');
    // this.message = '父组件的视图变更检测完毕 ngAfterViewChecked';

    // 下面代码会死循环
    // setTimeout(() => {
    //   this.message = '父组件的视图变更检测完毕 ngAfterViewChecked';
    // }, 0);
  }
  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕');
    // this.message = '父组件的视图初始化完毕 ngAfterViewInit';
    setTimeout(() => {
      this.message = '父组件的视图初始化完毕 ngAfterViewInit';
    }, 0);
  }

}
