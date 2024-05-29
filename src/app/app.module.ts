import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { DetailFoodComponent } from './detail-food/detail-food.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';
import { HeaderComponent } from './header/header.component';
import { DetailCocktailComponent } from './detail-cocktail/detail-cocktail.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodPageComponent,
    DetailFoodComponent,
    HomePageComponent,
    CardListComponent,
    CardHomeComponent,
    CocktailPageComponent,
    HeaderComponent,
    DetailCocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
