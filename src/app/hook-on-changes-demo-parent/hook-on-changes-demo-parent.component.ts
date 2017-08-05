import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook-on-changes-demo-parent',
  templateUrl: './hook-on-changes-demo-parent.component.html',
  styleUrls: ['./hook-on-changes-demo-parent.component.css']
})
export class HookOnChangesDemoParentComponent implements OnInit {
  quantity = 100;
  user = {
    name: '张三'
  };
  hasChild = false;

  constructor() { }

  ngOnInit() {
  }
  createChild() {
    this.hasChild = true;
  }

}
