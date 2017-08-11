import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAfterViewDemoComponent } from './main-after-view-demo.component';

describe('MainAfterViewDemoComponent', () => {
  let component: MainAfterViewDemoComponent;
  let fixture: ComponentFixture<MainAfterViewDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAfterViewDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAfterViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
