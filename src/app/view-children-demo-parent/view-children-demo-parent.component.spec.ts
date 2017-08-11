import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenDemoParentComponent } from './view-children-demo-parent.component';

describe('ViewChildrenDemoParentComponent', () => {
  let component: ViewChildrenDemoParentComponent;
  let fixture: ComponentFixture<ViewChildrenDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildrenDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildrenDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
