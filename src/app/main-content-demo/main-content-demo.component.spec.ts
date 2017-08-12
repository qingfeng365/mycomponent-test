import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentDemoComponent } from './main-content-demo.component';

describe('MainContentDemoComponent', () => {
  let component: MainContentDemoComponent;
  let fixture: ComponentFixture<MainContentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
