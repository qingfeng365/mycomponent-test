import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOnChangeParentComponent } from './input-on-change-parent.component';

describe('InputOnChangeParentComponent', () => {
  let component: InputOnChangeParentComponent;
  let fixture: ComponentFixture<InputOnChangeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOnChangeParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOnChangeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
