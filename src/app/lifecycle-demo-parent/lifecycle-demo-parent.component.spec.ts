import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleDemoParentComponent } from './lifecycle-demo-parent.component';

describe('LifecycleDemoParentComponent', () => {
  let component: LifecycleDemoParentComponent;
  let fixture: ComponentFixture<LifecycleDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
