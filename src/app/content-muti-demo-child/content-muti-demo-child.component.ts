import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-content-muti-demo-child',
  templateUrl: './content-muti-demo-child.component.html',
  styleUrls: ['./content-muti-demo-child.component.css']
})
export class ContentMutiDemoChildComponent implements OnInit,
OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy...');
  }

}
