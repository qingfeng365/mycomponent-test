import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-child-demo-basic-child',
  templateUrl: './view-child-demo-basic-child.component.html',
  styleUrls: ['./view-child-demo-basic-child.component.css']
})
export class ViewChildDemoBasicChildComponent implements OnInit {

  @Input()
  title = '';
  constructor() { }

  ngOnInit() {
  }

  hello() {
    console.log(`我是子组件${this.title}`);
  }

}
