import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent {
  constructor(private router: Router) {}
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  isVeg : boolean = true
  isCocktail : boolean = false;
  
  viewMenu(){
    
    this.router.navigate(['/menu']);
  }
  SelectVeg(){
    this.isVeg = true;
    this.isCocktail =false;
  }
  SelectCocktail(){
    this.isVeg = false;
    this.isCocktail =true;
  }
}
