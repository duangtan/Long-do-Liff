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
  

  viewMenu(){
    if(this.title==="The Vegan Food"){
      this.router.navigate(['/menu']);
    }
    else if(this.title==="The Cocktail"){
      this.router.navigate(['/cocktail']);  
    }
  }
}
