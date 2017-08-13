import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMutiDemoChildComponent } from './content-muti-demo-child.component';

describe('ContentMutiDemoChildComponent', () => {
  let component: ContentMutiDemoChildComponent;
  let fixture: ComponentFixture<ContentMutiDemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMutiDemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMutiDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
