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
    'x-rapidapi-key': '9bee21b09emshce4834927f8b630p1738cdjsn901b86c018ed',
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
