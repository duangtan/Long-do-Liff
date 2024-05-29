import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css']
})
export class CocktailPageComponent {
  constructor(private router: Router) {}
  @Input() displayedCocktails: any[] = [];

  ngOnInit(): void {
    
  }
  isCocktailPage = true;


  selectedOption: string = 'all';
  onOptionChange() {
    console.log('Selected option:', this.selectedOption);
  }
  Home(){
    this.router.navigate(['/home']); 
  }
}
