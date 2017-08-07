import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckImmutableDemoChildComponent } from './do-check-immutable-demo-child.component';

describe('DoCheckImmutableDemoChildComponent', () => {
  let component: DoCheckImmutableDemoChildComponent;
  let fixture: ComponentFixture<DoCheckImmutableDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckImmutableDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckImmutableDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
