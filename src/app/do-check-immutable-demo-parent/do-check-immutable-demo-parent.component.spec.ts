import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckImmutableDemoParentComponent } from './do-check-immutable-demo-parent.component';

describe('DoCheckImmutableDemoParentComponent', () => {
  let component: DoCheckImmutableDemoParentComponent;
  let fixture: ComponentFixture<DoCheckImmutableDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckImmutableDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckImmutableDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
