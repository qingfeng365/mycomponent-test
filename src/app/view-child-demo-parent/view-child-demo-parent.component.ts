import { Component, OnInit, Input, ViewChild, OnChanges, 
  SimpleChanges, AfterViewInit,
  ElementRef
 } from '@angular/core';
import { ViewChildDemoChildComponent } from '../view-child-demo-child/view-child-demo-child.component';

@Component({
  selector: 'app-view-child-demo-parent',
  templateUrl: './view-child-demo-parent.component.html',
  styleUrls: ['./view-child-demo-parent.component.css']
})
export class ViewChildDemoParentComponent implements OnInit,
  OnChanges, AfterViewInit {
  @Input()
  title = '';

  numberInputValue = 0;

  @ViewChild('child1')
  child1byViewVar: ViewChildDemoChildComponent;

  @ViewChild(ViewChildDemoChildComponent)
  childbyType: ViewChildDemoChildComponent;

  ishasChild1 = true;
  ishasChild2 = true;
  ishasChild3 = true;
  constructor(public selfElref: ElementRef) {
    console.log('constructor child1byViewVar:');
    console.log(this.child1byViewVar);

    console.log('constructor selfElref: ElementRef -->');
    console.log(this.selfElref);
  }

  ngOnInit() {
    console.log('ngOnInit child1byViewVar:');
    console.log(this.child1byViewVar);


  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges child1byViewVar:');
    console.log(this.child1byViewVar);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit child1byViewVar:');
    console.log(this.child1byViewVar);
  }
}
