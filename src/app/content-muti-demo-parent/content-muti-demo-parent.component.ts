import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-muti-demo-parent',
  templateUrl: './content-muti-demo-parent.component.html',
  styleUrls: ['./content-muti-demo-parent.component.css']
})
export class ContentMutiDemoParentComponent implements OnInit {

  header = '父组件页头';
  footer = '父组件页脚';
  constructor() { }

  ngOnInit() {
  }
  hello() {
    console.log('父组件 - hello');
  }
}
