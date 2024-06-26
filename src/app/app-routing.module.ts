import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailFoodComponent } from './detail-food/detail-food.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';
import { DetailCocktailComponent } from './detail-cocktail/detail-cocktail.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'menu', component: FoodPageComponent },
  { path: 'cocktail', component: CocktailPageComponent },
  { path: 'apifood/:foodId', component: DetailFoodComponent },
  { path: 'apicocktail/:cocktailId', component: DetailCocktailComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
