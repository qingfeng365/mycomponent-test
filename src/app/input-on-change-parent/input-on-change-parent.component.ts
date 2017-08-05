import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-on-change-parent',
  templateUrl: './input-on-change-parent.component.html',
  styleUrls: ['./input-on-change-parent.component.css']
})
export class InputOnChangeParentComponent implements OnInit {

  price: number = parseFloat((Math.random() * 100 + 1).toFixed(2));
  amount: number = Math.round(Math.random() * 10 + 1);

  constructor() { }

  ngOnInit() {
  }

  onclick1() {
    this.price = parseFloat((Math.random() * 100 + 1).toFixed(2));
  }
  onclick2() {
    this.amount = Math.round(Math.random() * 10 + 1);
  }
  onclick3() {
    this.price = parseFloat((Math.random() * 100 + 1).toFixed(2));
    this.amount = Math.round(Math.random() * 10 + 1);
  }
}
