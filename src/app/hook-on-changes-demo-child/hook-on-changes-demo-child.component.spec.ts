import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HookOnChangesDemoChildComponent } from './hook-on-changes-demo-child.component';

describe('HookOnChangesDemoChildComponent', () => {
  let component: HookOnChangesDemoChildComponent;
  let fixture: ComponentFixture<HookOnChangesDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HookOnChangesDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HookOnChangesDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
