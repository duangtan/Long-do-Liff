import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
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
