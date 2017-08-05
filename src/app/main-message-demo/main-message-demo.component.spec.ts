import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMessageDemoComponent } from './main-message-demo.component';

describe('MainMessageDemoComponent', () => {
  let component: MainMessageDemoComponent;
  let fixture: ComponentFixture<MainMessageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMessageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMessageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
