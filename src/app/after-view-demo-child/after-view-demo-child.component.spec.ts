import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewDemoChildComponent } from './after-view-demo-child.component';

describe('AfterViewDemoChildComponent', () => {
  let component: AfterViewDemoChildComponent;
  let fixture: ComponentFixture<AfterViewDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterViewDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterViewDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
