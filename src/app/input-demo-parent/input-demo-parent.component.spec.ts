import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDemoParentComponent } from './input-demo-parent.component';

describe('InputDemoParentComponent', () => {
  let component: InputDemoParentComponent;
  let fixture: ComponentFixture<InputDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
