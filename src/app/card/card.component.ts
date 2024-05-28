import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

export interface foodlist{
  title : string;
  difficulty : string;
  image : any;
  id : string;
  isFavorite: boolean; 
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() selectedOption: string | undefined;

  food_list: foodlist[] = []; 
  displayedFoods: foodlist[] = [];

  constructor(private apiService: ServiceService,private router: Router,private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.apiService.getVegFood().subscribe((data: any) => {
      this.food_list = data; 
      this.onOptionChange();
      console.log(this.selectedOption);
      console.log("Display",this.displayedFoods);
    }, error => {
      console.error(error);
    });
  }
  foodData : any[] = [];
  getFoodData(): void {
    this.apiService.getVegFood().subscribe(
      (data) => {
        this.foodData.push(data);
        this.convertData(this.foodData);
        this.food_list = this.convertData(this.foodData);    
      },
    );
  }
  convertData(data:any):any[]{
    let _data =[];
    for(let i=0;i<data.length;i++){
      _data.push({
        'title': (data[i]['title']||""),
        'difficulty': (data[i]['difficulty']||""),
        'image' : (data[i]['image']||""),
        'id' : (data[i]['id']||""),
      })
      console.log("This",data.length);
      
    }
    return _data;
  }

  getDetail(foodId: string) {
    this.router.navigate(['/api', foodId]); 
  }
  onOptionChange() {
    console.log("entry",this.displayedFoods);
    if (this.selectedOption === 'all') {
      this.displayedFoods = [...this.food_list]; ;
    } else if (this.selectedOption === 'easy') { 
      this.displayedFoods = this.food_list.filter(food => food.difficulty === 'Easy');
    } else if (this.selectedOption === 'medium') {
      this.displayedFoods = this.food_list.filter(food => food.difficulty === 'Medium');
      console.log("This",this.displayedFoods);
    }
    
  }
}
