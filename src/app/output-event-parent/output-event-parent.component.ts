import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-event-parent',
  templateUrl: './output-event-parent.component.html',
  styleUrls: ['./output-event-parent.component.css']
})
export class OutputEventParentComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['张三', '李四', '王五'];

  constructor() { }

  ngOnInit() {
  }
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
