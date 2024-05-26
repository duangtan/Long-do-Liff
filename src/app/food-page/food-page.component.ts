import { Component, OnInit } from '@angular/core';
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
}
