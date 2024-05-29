import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router) {}
  showCocktail = false;
  showVeg = true;

  showVegCard() {
    this.showCocktail = false;
    this.showVeg = true;
  }

  showCocktailCard() {
    this.showCocktail = true;
    this.showVeg = false;
  }
}
