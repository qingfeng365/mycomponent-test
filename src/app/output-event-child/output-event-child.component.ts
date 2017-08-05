import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output-event-child',
  templateUrl: './output-event-child.component.html',
  styleUrls: ['./output-event-child.component.css']
})
export class OutputEventChildComponent implements OnInit {
  @Input()
  name: string;

  @Output()
  onVoted = new EventEmitter<boolean>();

  isVoted = false;
  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.isVoted = true;
  }
}
