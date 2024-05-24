import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getVegFood() {
    const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
    const headers = {
      'X-RapidAPI-Key': '29c5b6aea2msh1c59e5a232dfdcdp1dfbd4jsn091d2c13df9f',
      'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
    };

    return this.http.get(url, { headers });
  }
}
