import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


export interface foodlist{
  title : string;
  difficulty : string;
  image : any;
  id : string; 
}

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  
  constructor(private router: Router) {}
  @Input() displayedFoods: any[] = [];

  ngOnInit(): void {
    
  }
  isVeganPage = true;

  selectedOption: string = 'all';
  onOptionChange() {
    console.log('Selected option:', this.selectedOption);
  }
  Home(){
    this.router.navigate(['/home']); 
  }

}
