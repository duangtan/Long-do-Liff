import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodDetail } from './detail-food/detail-food.component';
import { Observable, catchError } from 'rxjs';
import { CocktailDetail } from './detail-cocktail/detail-cocktail.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiFood = 'https://the-vegan-recipes-db.p.rapidapi.com/';
  private foodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': 'b400bbdfdmsh540e5fa8dd67be9p1623cbjsnb0caaede9a2e',
		'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
    //สำรอง
    // 'X-RapidAPI-Key': 'c5ec4e3af6mshdda55716fb2da2ep115829jsnca3e7bb9f794',
    // 'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
  });
  private apiCocktail = 'https://the-cocktail-db3.p.rapidapi.com/';
  private cocktailHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '29c5b6aea2msh1c59e5a232dfdcdp1dfbd4jsn091d2c13df9f',
    'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
    //สำรอง
    // 'X-RapidAPI-Key': '6b400bbdfdmsh540e5fa8dd67be9p1623cbjsnb0caaede9a2e',
    // 'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
  });
  private mockFoodUrl = 'assets/list_of_food.json';
  private mockCocktailUrl = 'assets/list_of_cocktail.json';
  
  constructor(private http: HttpClient) {}
  getVegFood() {
    //return this.http.get(this.apiFood, { headers: this.foodHeaders });
    return this.http.get(this.apiFood, { headers: this.foodHeaders }).pipe(
      catchError(() => this.http.get(this.mockFoodUrl))
    );
  }

  getFoodById(foodId: string): Observable<FoodDetail> {
    return this.http.get<FoodDetail>(`${this.apiFood}${foodId}`, { headers: this.foodHeaders });
  }

  getCocktail() {
    //return this.http.get(this.apiCocktail, { headers: this.cocktailHeaders });
    return this.http.get(this.apiCocktail, { headers: this.cocktailHeaders }).pipe(
      catchError(() => this.http.get(this.mockCocktailUrl))
    );
  }

  getCocktailById(cocktailId: string): Observable<CocktailDetail> {
    return this.http.get<CocktailDetail>(`${this.apiCocktail}${cocktailId}`, { headers: this.cocktailHeaders });
  }

}
