import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLifeDemoComponent } from './main-life-demo.component';

describe('MainLifeDemoComponent', () => {
  let component: MainLifeDemoComponent;
  let fixture: ComponentFixture<MainLifeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLifeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLifeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
