import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailFoodComponent } from './detail-food/detail-food.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'menu', component: FoodPageComponent },
  { path: 'api/:foodId', component: DetailFoodComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
