import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokenewsComponent } from './components/pokenews/pokenews.component';

const routes: Routes = [
  {
    path: 'news',
    component: PokenewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
