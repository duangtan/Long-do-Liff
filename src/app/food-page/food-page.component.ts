import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


export interface foodlist{
  title : string;
  difficulty : string;
  image : any;
  id : string;
  isFavorite: boolean; 
}

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  selectedDifficulty: string = 'All';
  food_list: foodlist[] = []; 

  constructor(private apiService: ServiceService,private router: Router) { }

  ngOnInit(): void {
    this.apiService.getVegFood().subscribe((data: any) => {
      this.food_list = data; 
      console.log(this.food_list);
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

  favoriteFoods: string[] = [];
  isFavorite = false;

  toggleFavorite(foodId: string) {
    const food = this.food_list.find(food => food.id === foodId);
    if (food) {
    food.isFavorite = !food.isFavorite;
    if (food.isFavorite) {
      this.favoriteFoods.push(foodId);
    } else {
      const index = this.favoriteFoods.indexOf(foodId);
      if (index !== -1) {
        this.favoriteFoods.splice(index, 1);
      }
    }
  }
}
showFavoriteFoods() {
  const favoriteFoodItems: foodlist[] = [];
  for (const foodId of this.favoriteFoods) {
    const food = this.food_list.find(item => item.id === foodId);
    if (food) {
      favoriteFoodItems.push(food);
    }
  }
  console.log(favoriteFoodItems);
  return favoriteFoodItems;
}

selectedOption: string = 'all';
onOptionChange() {
  console.log('Selected option:', this.selectedOption);
    
    if (this.selectedOption === 'favorite') {
      this.showFavoriteFoods();
    }
    this.updateDisplayedFoods();
  // เรียกใช้งานฟังก์ชันหรือทำสิ่งที่ต้องการเมื่อมีการเลือกตัวเลือกใหม่
}
displayedFoods: foodlist[] = [];
updateDisplayedFoods() {
  if (this.selectedOption === 'favorite') {
    this.displayedFoods = this.showFavoriteFoods();
  } else {
    this.displayedFoods = [...this.food_list]; // แสดงรายการอาหารทั้งหมด
  }
}
}
