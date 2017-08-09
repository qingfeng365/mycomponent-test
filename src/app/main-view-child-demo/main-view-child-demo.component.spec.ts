import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewChildDemoComponent } from './main-view-child-demo.component';

describe('MainViewChildDemoComponent', () => {
  let component: MainViewChildDemoComponent;
  let fixture: ComponentFixture<MainViewChildDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewChildDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewChildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
