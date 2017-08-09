
import { Component, OnInit, OnChanges, AfterViewInit, Input, ViewChild, ElementRef, SimpleChanges, DoCheck } from '@angular/core';
import { ViewChildDemoBasicChildComponent } from '../view-child-demo-basic-child/view-child-demo-basic-child.component';

@Component({
  selector: 'app-view-child-demo-basic-parent',
  templateUrl: './view-child-demo-basic-parent.component.html',
  styleUrls: ['./view-child-demo-basic-parent.component.css']
})

export class ViewChildDemoBasicParentComponent implements OnInit,
  OnChanges, AfterViewInit, DoCheck {

  @Input()
  title = '';

  numberInputValue = 0;
  numberInputValue1 = 0;

  @ViewChild('child1')
  child1byViewVar: ViewChildDemoBasicChildComponent;
  @ViewChild('child2')
  child2byViewVar: ViewChildDemoBasicChildComponent;

  @ViewChild(ViewChildDemoBasicChildComponent)
  childbyType: ViewChildDemoBasicChildComponent;

  ishasChild1 = true;
  ishasChild2 = true;
  ishasChild3 = true;
  constructor(public selfElref: ElementRef) {
    console.log('constructor child1byViewVar:');
    console.log(this.child1byViewVar);
    console.log('constructor child2byViewVar:');
    console.log(this.child2byViewVar);
    console.log('constructor selfElref: ElementRef -->');
    console.log(this.selfElref);
  }

  ngOnInit() {
    console.log('ngOnInit child1byViewVar:');
    console.log(this.child1byViewVar);
    console.log('ngOnInit child2byViewVar:');
    console.log(this.child2byViewVar);

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges child1byViewVar:');
    console.log(this.child2byViewVar);
    console.log('ngOnChanges child1byViewVar:');
    console.log(this.child2byViewVar);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit child1byViewVar:');
    console.log(this.child1byViewVar);
    console.log('ngAfterViewInit child2byViewVar:');
    console.log(this.child2byViewVar);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck...');
  }
  show(msg) {
    console.log(msg);
    console.dir(msg);
  }
}
