import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';


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
  //food_list: foodlist[] = []; 
  

  constructor(private apiService: ServiceService,private router: Router,private localStorageService: LocalStorageService) {}
  @Input() displayedFoods: any[] = [];

  ngOnInit(): void {
  }


  selectedOption: string = 'all';
  onOptionChange() {
    console.log('Selected option:', this.selectedOption);
  }
  onDisplayedFoodsChange(displayedFoods: any[]) {
    // รับค่า displayedFoods จาก app-card และทำตามขั้นตอนต่อไป
    //this.food_list = displayedFoods;
  }


}
