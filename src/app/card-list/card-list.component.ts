import { Component, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
export interface foodlist{
  title : string;
  difficulty : string;
  image : any;
  id : string;
}
export interface cocktaillist{
  title : string;
  difficulty : string;
  image : any;
  id : string;
}
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() selectedOption: string | undefined;
  @Input() isVeganPage: boolean | undefined;
  @Input() isCocktailPage: boolean | undefined;

  food_list: foodlist[] = []; 
  cocktail_list: cocktaillist[] = []; 
  displayedFoods: foodlist[] = [];
  displayedCocktails: cocktaillist[] = [];

  constructor(private apiService: ServiceService,private router: Router,) {}

  ngOnInit(): void {
    if (this.isVeganPage) {
      this.apiService.getVegFood().subscribe((data: any) => {
        this.food_list = data; 
        this.onOptionChangeFood();
        console.log(this.selectedOption);
        console.log("Display",this.displayedFoods);
      }, error => {
        console.error(error);
      });
    } else if (this.isCocktailPage) {
      this.apiService.getCocktail().subscribe((data: any) => {
        this.cocktail_list = data; 
        this.onOptionChangeCocktail();
        console.log(this.selectedOption);
        console.log("DisplayCocktail",this.displayedCocktails);
      }, error => {
        console.error(error);
      });
    }
    
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

  cocktailData : any[] = [];
  getcocktailData(): void {
    this.apiService.getCocktail().subscribe(
      (data) => {
        this.cocktailData.push(data);
        this.convertData(this.cocktailData);
        this.cocktail_list = this.convertData(this.cocktailData);    
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

  getDetailFood(foodId: string) {
    this.router.navigate(['/apifood', foodId]); 
  }
  getDetailCocktail(cocktailId: string) {
    this.router.navigate(['/apicocktail', cocktailId]); 
  }

  onOptionChangeFood() {
    if (this.selectedOption === 'all') {
      this.displayedFoods = [...this.food_list]; ;
    } else if (this.selectedOption === 'easy') { 
      this.displayedFoods = this.food_list.filter(food => food.difficulty === 'Easy');
    } else if (this.selectedOption === 'medium') {
      this.displayedFoods = this.food_list.filter(food => food.difficulty === 'Medium');
    }
  }

  onOptionChangeCocktail() {
    if (this.selectedOption === 'all') {
      this.displayedCocktails = [...this.cocktail_list]; ;
    } else if (this.selectedOption === 'easy') { 
      this.displayedCocktails = this.cocktail_list.filter(cocktail => cocktail.difficulty === 'Easy');
    } else if (this.selectedOption === 'medium') {
      this.displayedCocktails = this.cocktail_list.filter(cocktail => cocktail.difficulty === 'Medium');
    }
  }
}
