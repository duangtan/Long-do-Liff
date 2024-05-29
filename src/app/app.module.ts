import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { DetailFoodComponent } from './detail-food/detail-food.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardHomeComponent } from './card-home/card-home.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodPageComponent,
    DetailFoodComponent,
    CardComponent,
    HomePageComponent,
    CardHomeComponent
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
