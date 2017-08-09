import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-child-demo-child',
  templateUrl: './view-child-demo-child.component.html',
  styleUrls: ['./view-child-demo-child.component.css']
})
export class ViewChildDemoChildComponent implements OnInit {
  @Input()
  title = '';
  constructor() { }

  ngOnInit() {
  }

  hello() {
    console.log(`我是子组件${this.title}`);
  }
}
