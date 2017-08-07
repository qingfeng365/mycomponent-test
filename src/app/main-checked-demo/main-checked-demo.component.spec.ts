import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCheckedDemoComponent } from './main-checked-demo.component';

describe('MainCheckedDemoComponent', () => {
  let component: MainCheckedDemoComponent;
  let fixture: ComponentFixture<MainCheckedDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCheckedDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCheckedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
