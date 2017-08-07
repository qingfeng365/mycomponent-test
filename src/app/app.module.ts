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
    DoCheckDefaultDemoParentComponent
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
