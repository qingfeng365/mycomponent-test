import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMutiDemoParentComponent } from './content-muti-demo-parent.component';

describe('ContentMutiDemoParentComponent', () => {
  let component: ContentMutiDemoParentComponent;
  let fixture: ComponentFixture<ContentMutiDemoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMutiDemoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMutiDemoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
