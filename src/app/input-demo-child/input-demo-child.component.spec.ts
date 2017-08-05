import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDemoChildComponent } from './input-demo-child.component';

describe('InputDemoChildComponent', () => {
  let component: InputDemoChildComponent;
  let fixture: ComponentFixture<InputDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
