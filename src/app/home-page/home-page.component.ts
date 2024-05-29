import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router: Router) {}
  isVeg : boolean = true
  isCocktail : boolean = false;
  
  viewMenu(){
    this.router.navigate(['/menu']);
  }
  
  showCocktail = false;

  showVegCard() {
    this.showCocktail = false;
  }

  showCocktailCard() {
    this.showCocktail = true;
  }
  
}
