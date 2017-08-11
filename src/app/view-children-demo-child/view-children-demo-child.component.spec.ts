import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenDemoChildComponent } from './view-children-demo-child.component';

describe('ViewChildrenDemoChildComponent', () => {
  let component: ViewChildrenDemoChildComponent;
  let fixture: ComponentFixture<ViewChildrenDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildrenDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildrenDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
