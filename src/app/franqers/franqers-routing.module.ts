import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FranqerHomeComponent } from './franqer-home/franqer-home.component';

const routes: Routes = [
  {
    path: 'franqer/:nickname',
    component: FranqerHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranqersRoutingModule {}
