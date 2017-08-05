import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HookOnChangesDemoParentComponent } from './hook-on-changes-demo-parent.component';

describe('HookOnChangesDemoParentComponent', () => {
  let component: HookOnChangesDemoParentComponent;
  let fixture: ComponentFixture<HookOnChangesDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HookOnChangesDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HookOnChangesDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
