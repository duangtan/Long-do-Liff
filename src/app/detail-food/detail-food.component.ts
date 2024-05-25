import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

export interface FoodDetail{
  title : string;
  difficulty : string;
  image : any;
  id : string;
  portion : string;
  time : string;
  description : string;
  ingredients : string;
  method : string;
}

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.css']
})
export class DetailFoodComponent implements OnInit {
  food_detail: FoodDetail | null = null;
  foodId!: string;
   

  constructor(private apiService: ServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.foodId = params['foodId'];
      console.log('Food Id:', this.foodId);
      this.getFoodDetail(this.foodId);
    });
  }
  getFoodDetail(foodId: string): void {
    this.apiService.getFoodById(foodId).subscribe(
      (data: FoodDetail) => {
        this.food_detail = data;  
        this.convertData(this.food_detail);
      },
      (error) => {
        console.error('Error fetching food details:', error);
      }
    );
  }
  
  test(){
    console.log("FoodID",this.foodId);
    console.log("FoodDetail: ",this.food_detail);
    console.log("FoodID",this.food_detail);

    
  }

  convertData(data:any):any[]{
    let _datadetail =[];
    for(let i=0;i<data.length;i++){
      _datadetail.push({
        'title': (data[i]['title']||""),
        'difficulty': (data[i]['difficulty']||""),
        'image' : (data[i]['image']||""),
        'id' : (data[i]['id']||""),
        'portion' : (data[i]['portion']||""),
        'time' : (data[i]['time']||""),
        'description' : (data[i]['description']||""),
        'ingredients' : (data[i]['ingredients']||""),
        'method' : (data[i]['method']||""),
      })
      console.log("This",data.length);
      
    }
    return _datadetail;
  }

}
