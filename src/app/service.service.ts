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
  private headers = new HttpHeaders({
    'x-rapidapi-key': '64b6ec1b95msh824e810cc0b079dp19a41bjsn746c3081d0f2',
	  'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
  });
  // private apiCocktail = 'https://the-cocktail-db3.p.rapidapi.com/';
  // private headers2 = new HttpHeaders({
  //   'X-RapidAPI-Key': '29c5b6aea2msh1c59e5a232dfdcdp1dfbd4jsn091d2c13df9f',
  //   'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
  
  // });

  constructor(private http: HttpClient) {}
  getVegFood() {
    return this.http.get(this.apiFood,  { headers : this.headers } );
  }

  getFoodById(foodId: string): Observable<FoodDetail> {
    return this.http.get<FoodDetail>(`${this.apiFood}${foodId}`);
  }

  getCocktail() {
    // return this.http.get(this.apiCocktail,  { headers : this.headers2 });
    return true;
  }

  // getCocktailById(cocktailId: string): Observable<CocktailDetail> { 
  //   // return this.http.get<CocktailDetail>(`${this.apiCocktail}${cocktailId}`);
  // }
  

}
