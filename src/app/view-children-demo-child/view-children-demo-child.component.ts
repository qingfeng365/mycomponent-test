import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-children-demo-child',
  templateUrl: './view-children-demo-child.component.html',
  styleUrls: ['./view-children-demo-child.component.css']
})
export class ViewChildrenDemoChildComponent implements OnInit {


  @Input()
  title = '';
  constructor() { }

  ngOnInit() {
  }

  hello() {
    console.log(`我是子组件${this.title}`);
  }
}
