import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSetterDemoChildComponent } from './input-setter-demo-child.component';

describe('InputSetterDemoChildComponent', () => {
  let component: InputSetterDemoChildComponent;
  let fixture: ComponentFixture<InputSetterDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSetterDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSetterDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
