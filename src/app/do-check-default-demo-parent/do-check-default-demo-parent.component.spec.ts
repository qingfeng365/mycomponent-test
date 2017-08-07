import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckDefaultDemoParentComponent } from './do-check-default-demo-parent.component';

describe('DoCheckDefaultDemoParentComponent', () => {
  let component: DoCheckDefaultDemoParentComponent;
  let fixture: ComponentFixture<DoCheckDefaultDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckDefaultDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckDefaultDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
