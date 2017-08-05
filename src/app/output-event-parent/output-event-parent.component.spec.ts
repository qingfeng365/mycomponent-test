import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEventParentComponent } from './output-event-parent.component';

describe('OutputEventParentComponent', () => {
  let component: OutputEventParentComponent;
  let fixture: ComponentFixture<OutputEventParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputEventParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputEventParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
