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
    'x-rapidapi-key': '9bffaa3c41mshc4a6fa527c59f86p1237d6jsn3d7f91603a3b',
		'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}
  getVegFood() {

    return this.http.get(this.apiUrl, { headers : this.headers });
  }

  getFoodById(foodId: string): Observable<FoodDetail> {
    return this.http.get<FoodDetail>(`${this.apiUrl}${foodId}`, { headers: this.headers });
  }

}
