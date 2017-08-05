import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook-on-changes-demo-child',
  templateUrl: './hook-on-changes-demo-child.component.html',
  styleUrls: ['./hook-on-changes-demo-child.component.css']
})
export class HookOnChangesDemoChildComponent implements OnInit, OnChanges {

  @Input()
  quantity: number;
  @Input()
  user: { name };

  price = 999;

  constructor() {
    console.log('constructor...');
  }

  ngOnInit() {
    console.log('ngOnInit...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges...');
    console.log(JSON.stringify(changes, null, 2));
  }
}
