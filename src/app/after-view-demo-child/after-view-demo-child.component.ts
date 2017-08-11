import {
  Component, OnInit, AfterViewInit,
  AfterViewChecked, Input, DoCheck, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-after-view-demo-child',
  templateUrl: './after-view-demo-child.component.html',
  styleUrls: ['./after-view-demo-child.component.css']
})
export class AfterViewDemoChildComponent implements OnInit, AfterViewInit, AfterViewChecked, DoCheck {


  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }
  hello(name: string) {
    console.log('hello ' + name);
  }
  ngDoCheck(): void {
    console.log('子组件 DoCheck - ' + this.title);
  }
  ngAfterViewInit(): void {
    console.log('子组件的视图初始化完毕 ngAfterViewInit - ' + this.title);
  }

  ngAfterViewChecked(): void {
    console.log('子组件的视图变更检测完毕 ngAfterViewChecked - ' + this.title);
  }
}
