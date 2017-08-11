import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDemoAdvComponent } from './view-child-demo-adv.component';

describe('ViewChildDemoAdvComponent', () => {
  let component: ViewChildDemoAdvComponent;
  let fixture: ComponentFixture<ViewChildDemoAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildDemoAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDemoAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
