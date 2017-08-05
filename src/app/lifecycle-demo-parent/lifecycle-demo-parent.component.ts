import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo-parent',
  templateUrl: './lifecycle-demo-parent.component.html',
  styleUrls: ['./lifecycle-demo-parent.component.css']
})
export class LifecycleDemoParentComponent implements OnInit {

  hasChild = false;
  childValue: number;
  constructor() { }

  ngOnInit() {
  }

  createChild() {
    this.updateChildValue();
    this.hasChild = true;
  }
  delChild() {
    this.hasChild = false;
  }
  updateChildValue() {
    this.childValue = parseFloat((Math.random() * 100 + 1).toFixed(2));
  }
}
