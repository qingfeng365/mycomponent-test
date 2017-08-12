import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMessageDemoComponent } from './main-message-demo/main-message-demo.component';
import { MainLifeDemoComponent } from './main-life-demo/main-life-demo.component';
import { MainCheckedDemoComponent } from './main-checked-demo/main-checked-demo.component';
import { MainViewChildDemoComponent } from './main-view-child-demo/main-view-child-demo.component';
import { MainAfterViewDemoComponent } from './main-after-view-demo/main-after-view-demo.component';
import { MainContentDemoComponent } from './main-content-demo/main-content-demo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'message',
    pathMatch: 'full'
  },
  {
    path: 'message',
    component: MainMessageDemoComponent
  },
  {
    path: 'life',
    component: MainLifeDemoComponent,
  },
  {
    path: 'checked',
    component: MainCheckedDemoComponent,
  },
  {
    path: 'viewchild',
    component: MainViewChildDemoComponent,
  },
  {
    path: 'afterview',
    component: MainAfterViewDemoComponent,
  },
  {
    path: 'content',
    component: MainContentDemoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
