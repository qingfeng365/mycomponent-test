import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEventChildComponent } from './output-event-child.component';

describe('OutputEventChildComponent', () => {
  let component: OutputEventChildComponent;
  let fixture: ComponentFixture<OutputEventChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputEventChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputEventChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
