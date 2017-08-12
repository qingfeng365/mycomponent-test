import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyinput]'
})
export class MyinputDirective {

  constructor(public elref: ElementRef) { }

}
