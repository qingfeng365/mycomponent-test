import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOnChangeChildComponent } from './input-on-change-child.component';

describe('InputOnChangeChildComponent', () => {
  let component: InputOnChangeChildComponent;
  let fixture: ComponentFixture<InputOnChangeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOnChangeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOnChangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
