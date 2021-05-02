import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './modules/main-page/main-page.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/series',
    pathMatch: 'full'
  },
  {
    path: 'series',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }