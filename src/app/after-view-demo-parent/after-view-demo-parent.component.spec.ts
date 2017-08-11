import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewDemoParentComponent } from './after-view-demo-parent.component';

describe('AfterViewDemoParentComponent', () => {
  let component: AfterViewDemoParentComponent;
  let fixture: ComponentFixture<AfterViewDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterViewDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterViewDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
