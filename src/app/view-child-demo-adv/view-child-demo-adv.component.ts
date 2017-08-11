import { Component, OnInit, ViewChild, Directive, Input, ElementRef } from '@angular/core';


// tslint:disable-next-line:directive-selector
@Directive({ selector: '.alert' })
// tslint:disable-next-line:directive-class-suffix
export class MyAlert {
  @Input() id: string;
  element: any;
  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }
}


@Component({
  selector: 'app-view-child-demo-adv',
  templateUrl: './view-child-demo-adv.component.html',
  styleUrls: ['./view-child-demo-adv.component.css']
})
export class ViewChildDemoAdvComponent implements OnInit {
  shouldShow = true;
  shouldShowvar = true;

  @ViewChild(MyAlert)
  alert: MyAlert;

  @ViewChild('alertvar')
  alertByVar: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.shouldShow = !this.shouldShow;
    setTimeout(() => {
      console.log(this.alert.id);
      console.log(this.alert);
    });
  }
  togglevar() {
    this.shouldShowvar = !this.shouldShowvar;
    setTimeout(() => {
      console.log(this.alertByVar.nativeElement.id);
      console.log(this.alertByVar.nativeElement);
    });
  }
  show() {
    console.log(this.alert.id);
    console.log(this.alert);
    console.log(this.alertByVar.nativeElement.id);
    console.log(this.alertByVar.nativeElement);
  }
}
