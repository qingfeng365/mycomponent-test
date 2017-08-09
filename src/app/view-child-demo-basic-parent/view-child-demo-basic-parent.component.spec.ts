import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDemoBasicParentComponent } from './view-child-demo-basic-parent.component';

describe('ViewChildDemoBasicParentComponent', () => {
  let component: ViewChildDemoBasicParentComponent;
  let fixture: ComponentFixture<ViewChildDemoBasicParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildDemoBasicParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDemoBasicParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
