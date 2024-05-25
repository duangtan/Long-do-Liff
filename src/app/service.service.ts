import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodDetail } from './detail-food/detail-food.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'https://the-vegan-recipes-db.p.rapidapi.com/';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '29c5b6aea2msh1c59e5a232dfdcdp1dfbd4jsn091d2c13df9f',
    'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}
  getVegFood() {
    // const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
    // const headers = {
    //   'X-RapidAPI-Key': 'da06a436f8msha76c0f760f12566p197ae7jsnf5057645a4b0',
		//   'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
    // };

    return this.http.get(this.apiUrl, { headers : this.headers });
  }

  getFoodById(foodId: string): Observable<FoodDetail> {
    return this.http.get<FoodDetail>(`${this.apiUrl}${foodId}`, { headers: this.headers });
  }

  // constructor(private http: HttpClient) { }
  // getVegFood() {
  //   const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
  //   const headers = {
  //     'X-RapidAPI-Key': 'da06a436f8msha76c0f760f12566p197ae7jsnf5057645a4b0',
	// 	  'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
  //   };

  //   return this.http.get(url, { headers });
  // }

  // getFoodById(FoodId: string){
  //   const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
  //   const headers = {
  //     'X-RapidAPI-Key': 'da06a436f8msha76c0f760f12566p197ae7jsnf5057645a4b0',
	// 	  'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
  //   };
  //   return this.http.get(url + FoodId , { headers });
    
  // }
}
