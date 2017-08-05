import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleDemoChildComponent } from './lifecycle-demo-child.component';

describe('LifecycleDemoChildComponent', () => {
  let component: LifecycleDemoChildComponent;
  let fixture: ComponentFixture<LifecycleDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
