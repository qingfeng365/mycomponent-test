import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDemoParentComponent } from './content-demo-parent.component';

describe('ContentDemoParentComponent', () => {
  let component: ContentDemoParentComponent;
  let fixture: ComponentFixture<ContentDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
