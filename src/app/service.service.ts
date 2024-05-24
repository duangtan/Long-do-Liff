import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getVegFood() {
    // const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
    const url = 'https://the-vegan-recipes-db.p.rapidapi.com/45';
    const headers = {
      // 'X-RapidAPI-Key': '29c5b6aea2msh1c59e5a232dfdcdp1dfbd4jsn091d2c13df9f',
      // 'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
      'X-RapidAPI-Key': 'da06a436f8msha76c0f760f12566p197ae7jsnf5057645a4b0',
		  'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
    };

    return this.http.get(url, { headers });
  }
}
