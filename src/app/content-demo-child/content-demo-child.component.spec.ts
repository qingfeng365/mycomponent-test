import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDemoChildComponent } from './content-demo-child.component';

describe('ContentDemoChildComponent', () => {
  let component: ContentDemoChildComponent;
  let fixture: ComponentFixture<ContentDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
