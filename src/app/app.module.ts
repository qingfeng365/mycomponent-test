import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMessageDemoComponent } from './main-message-demo/main-message-demo.component';
import { InputDemoChildComponent } from './input-demo-child/input-demo-child.component';
import { InputDemoParentComponent } from './input-demo-parent/input-demo-parent.component';
import { InputSetterDemoChildComponent } from './input-setter-demo-child/input-setter-demo-child.component';
import { InputSetterDemoParentComponent } from './input-setter-demo-parent/input-setter-demo-parent.component';
import { InputOnChangeChildComponent } from './input-on-change-child/input-on-change-child.component';
import { InputOnChangeParentComponent } from './input-on-change-parent/input-on-change-parent.component';
import { OutputEventChildComponent } from './output-event-child/output-event-child.component';
import { OutputEventParentComponent } from './output-event-parent/output-event-parent.component';
import { MainLifeDemoComponent } from './main-life-demo/main-life-demo.component';
import { LifecycleDemoChildComponent } from './lifecycle-demo-child/lifecycle-demo-child.component';
import { LifecycleDemoParentComponent } from './lifecycle-demo-parent/lifecycle-demo-parent.component';
import { HookOnChangesDemoChildComponent } from './hook-on-changes-demo-child/hook-on-changes-demo-child.component';
import { HookOnChangesDemoParentComponent } from './hook-on-changes-demo-parent/hook-on-changes-demo-parent.component';
import { MainCheckedDemoComponent } from './main-checked-demo/main-checked-demo.component';
import { DoCheckDefaultDemoChildComponent } from './do-check-default-demo-child/do-check-default-demo-child.component';
import { DoCheckDefaultDemoParentComponent } from './do-check-default-demo-parent/do-check-default-demo-parent.component';
import { DoCheckImmutableDemoChildComponent } from './do-check-immutable-demo-child/do-check-immutable-demo-child.component';
import { DoCheckImmutableDemoParentComponent } from './do-check-immutable-demo-parent/do-check-immutable-demo-parent.component';
import { MainViewChildDemoComponent } from './main-view-child-demo/main-view-child-demo.component';
import { ViewChildDemoBasicChildComponent } from './view-child-demo-basic-child/view-child-demo-basic-child.component';
import { ViewChildDemoBasicParentComponent } from './view-child-demo-basic-parent/view-child-demo-basic-parent.component';
import { ViewChildDemoAdvComponent, MyAlert } from './view-child-demo-adv/view-child-demo-adv.component';
import { ViewChildrenDemoChildComponent } from './view-children-demo-child/view-children-demo-child.component';
import { ViewChildrenDemoParentComponent } from './view-children-demo-parent/view-children-demo-parent.component';
import { MainAfterViewDemoComponent } from './main-after-view-demo/main-after-view-demo.component';
import { AfterViewDemoChildComponent } from './after-view-demo-child/after-view-demo-child.component';
import { AfterViewDemoParentComponent } from './after-view-demo-parent/after-view-demo-parent.component';
import { MainContentDemoComponent } from './main-content-demo/main-content-demo.component';
import { ContentDemoChildComponent } from './content-demo-child/content-demo-child.component';
import { ContentDemoParentComponent } from './content-demo-parent/content-demo-parent.component';
import { MyinputDirective } from './myinput.directive';
import { ContentMutiDemoChildComponent } from './content-muti-demo-child/content-muti-demo-child.component';
import { ContentMutiDemoParentComponent } from './content-muti-demo-parent/content-muti-demo-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMessageDemoComponent,
    InputDemoChildComponent,
    InputDemoParentComponent,
    InputSetterDemoChildComponent,
    InputSetterDemoParentComponent,
    InputOnChangeChildComponent,
    InputOnChangeParentComponent,
    OutputEventChildComponent,
    OutputEventParentComponent,
    MainLifeDemoComponent,
    LifecycleDemoChildComponent,
    LifecycleDemoParentComponent,
    HookOnChangesDemoChildComponent,
    HookOnChangesDemoParentComponent,
    MainCheckedDemoComponent,
    DoCheckDefaultDemoChildComponent,
    DoCheckDefaultDemoParentComponent,
    DoCheckImmutableDemoChildComponent,
    DoCheckImmutableDemoParentComponent,
    MainViewChildDemoComponent,
    ViewChildDemoBasicChildComponent,
    ViewChildDemoBasicParentComponent,
    ViewChildDemoAdvComponent,
    MyAlert,
    ViewChildrenDemoChildComponent,
    ViewChildrenDemoParentComponent,
    MainAfterViewDemoComponent,
    AfterViewDemoChildComponent,
    AfterViewDemoParentComponent,
    MainContentDemoComponent,
    ContentDemoChildComponent,
    ContentDemoParentComponent,
    MyinputDirective,
    ContentMutiDemoChildComponent,
    ContentMutiDemoParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
