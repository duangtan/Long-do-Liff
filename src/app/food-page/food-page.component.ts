import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

export interface foodlist{
  title : string;
  difficulty : string;
  img_food : any;
}

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food_list: foodlist[] = []; 

  constructor(private apiService: ServiceService) { }

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
        console.log("This",this.food_list);    
      },
    );
  }
  convertData(data:any):any[]{
    let _data =[];
    for(let i=0;i<data.length;i++){
      _data.push({
        'title': (data[i]['title']||""),
        'difficulty': (data[i]['difficulty']||""),
        'img_food' : (data[i]['image']),
      })
      console.log("This",data.length);
      
    }
    return _data;
  }

}
