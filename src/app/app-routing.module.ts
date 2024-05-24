import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailFoodComponent } from './detail-food/detail-food.component';

const routes: Routes = [
  { path: 'fooddetail', component: DetailFoodComponent } // เพิ่มเส้นทางสำหรับหน้าใหม่
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
