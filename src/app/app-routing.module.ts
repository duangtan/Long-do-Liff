import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailFoodComponent } from './detail-food/detail-food.component';
import { FoodPageComponent } from './food-page/food-page.component';

const routes: Routes = [
  { path: 'menu', component: FoodPageComponent },
  { path: 'fooddetail', component: DetailFoodComponent } ,
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
