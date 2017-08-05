import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSetterDemoParentComponent } from './input-setter-demo-parent.component';

describe('InputSetterDemoParentComponent', () => {
  let component: InputSetterDemoParentComponent;
  let fixture: ComponentFixture<InputSetterDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSetterDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSetterDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
