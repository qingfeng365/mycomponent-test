import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDemoBasicChildComponent } from './view-child-demo-basic-child.component';

describe('ViewChildDemoBasicChildComponent', () => {
  let component: ViewChildDemoBasicChildComponent;
  let fixture: ComponentFixture<ViewChildDemoBasicChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildDemoBasicChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDemoBasicChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
