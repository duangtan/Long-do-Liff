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
    'X-RapidAPI-Key': '115fee7a62msh208feeaee8a6d08p1f9903jsn542593f71b9e',
    'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'

  });

  constructor(private http: HttpClient) {}
  getVegFood() {
    return this.http.get(this.apiUrl, { headers : this.headers });
  }

  getFoodById(foodId: string): Observable<FoodDetail> {
    return this.http.get<FoodDetail>(`${this.apiUrl}${foodId}`, { headers: this.headers });
  }

}
