import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckDefaultDemoChildComponent } from './do-check-default-demo-child.component';

describe('DoCheckDefaultDemoChildComponent', () => {
  let component: DoCheckDefaultDemoChildComponent;
  let fixture: ComponentFixture<DoCheckDefaultDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckDefaultDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckDefaultDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
