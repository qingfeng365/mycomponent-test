import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMessageDemoComponent } from './main-message-demo/main-message-demo.component';
import { MainLifeDemoComponent } from './main-life-demo/main-life-demo.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
