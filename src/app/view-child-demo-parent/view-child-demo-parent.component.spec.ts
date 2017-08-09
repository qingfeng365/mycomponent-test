import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDemoParentComponent } from './view-child-demo-parent.component';

describe('ViewChildDemoParentComponent', () => {
  let component: ViewChildDemoParentComponent;
  let fixture: ComponentFixture<ViewChildDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
