import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDemoChildComponent } from './view-child-demo-child.component';

describe('ViewChildDemoChildComponent', () => {
  let component: ViewChildDemoChildComponent;
  let fixture: ComponentFixture<ViewChildDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
