import { Component, OnInit, OnChanges, AfterViewInit, Input, ElementRef, ViewChildren, QueryList, SimpleChanges } from '@angular/core';
import { ViewChildrenDemoChildComponent } from '../view-children-demo-child/view-children-demo-child.component';

@Component({
  selector: 'app-view-children-demo-parent',
  templateUrl: './view-children-demo-parent.component.html',
  styleUrls: ['./view-children-demo-parent.component.css']
})
export class ViewChildrenDemoParentComponent implements  OnInit,
  OnChanges, AfterViewInit  {

  @Input()
  title = '';

  @ViewChildren(ViewChildrenDemoChildComponent)
  childs: QueryList<ViewChildrenDemoChildComponent>;

  ishasChild1 = true;
  ishasChild2 = true;
  ishasChild3 = true;

  constructor() {
    console.log('constructor:');
    console.log(this.childs);
  }

  ngOnInit() {
    console.log('ngOnInit:');
    console.log(this.childs);

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:');
    console.log(this.childs);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit:');
    console.log(this.childs);

    this.childs.changes
      .subscribe(v => console.log(v));
  }

}
