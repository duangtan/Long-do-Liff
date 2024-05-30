import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodDetail } from './detail-food/detail-food.component';
import { Observable } from 'rxjs';
import { CocktailDetail } from './detail-cocktail/detail-cocktail.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiFood = 'https://the-vegan-recipes-db.p.rapidapi.com/';
  private foodHeaders = new HttpHeaders({
    // 'x-rapidapi-key': '64b6ec1b95msh824e810cc0b079dp19a41bjsn746c3081d0f2',
    // 'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
    'X-RapidAPI-Key': '29c5b6aea2msh1c59e5a232dfdcdp1dfbd4jsn091d2c13df9f',
    'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
  });
  private apiCocktail = 'https://the-cocktail-db3.p.rapidapi.com/';
  private cocktailHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '29c5b6aea2msh1c59e5a232dfdcdp1dfbd4jsn091d2c13df9f',
    'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
  });
  
  constructor(private http: HttpClient) {}
  getApiFood(): string {
    return this.apiFood;
  }
  getApiCocktail(): string {
    return this.apiCocktail;
  }
  getVegFood() {
    return this.http.get(this.apiFood, { headers: this.foodHeaders });
  }

  getFoodById(foodId: string): Observable<FoodDetail> {
    return this.http.get<FoodDetail>(`${this.apiFood}${foodId}`, { headers: this.foodHeaders });
  }

  getCocktail() {
    return this.http.get(this.apiCocktail, { headers: this.cocktailHeaders });
  }

  getCocktailById(cocktailId: string): Observable<CocktailDetail> {
    return this.http.get<CocktailDetail>(`${this.apiCocktail}${cocktailId}`, { headers: this.cocktailHeaders });
  }

}
