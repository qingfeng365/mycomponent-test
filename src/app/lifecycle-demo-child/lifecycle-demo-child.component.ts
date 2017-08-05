import {
  Component, OnInit, Input, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';

let nextId = 1;

@Component({
  selector: 'app-lifecycle-demo-child',
  templateUrl: './lifecycle-demo-child.component.html',
  styleUrls: ['./lifecycle-demo-child.component.css']
})
export class LifecycleDemoChildComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  @Input()
  value: number;

  logIt(msg: string) {
    console.log(`#${nextId++} ${msg}`);
  }
  constructor() {
    this.logIt('constructor: value 属性在 constructor 里的值是:' + this.value);
  }

  ngOnInit() {
    this.logIt('ngOnInit: value 属性在 ngOnInit 里的值是:' + this.value);
  }

  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }
  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line:max-line-length
    this.logIt(`ngOnChanges: this.value: ${this.value}, currentValue: ${changes['value'].currentValue}, previousValue:${changes['value'].previousValue}`)
  }

}
