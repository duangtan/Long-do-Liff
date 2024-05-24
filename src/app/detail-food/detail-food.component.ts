import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

export interface fooddetail{
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
  food_detail: fooddetail[] = []; 
  constructor(private apiService: ServiceService,private router: Router) { }
  ngOnInit(): void {
    this.apiService.getVegFood().subscribe((data: any) => {
      this.food_detail = data; 
      console.log("FoodIDdetail",this.food_detail);
    }, error => {
      console.error(error);
    });
  }
  FoodDetailData : any[] = [];
  getFoodDetailData(FoodID: string): void {
    this.apiService.getFoodById(FoodID).subscribe(
      (data) => {
        this.FoodDetailData.push(data);
        this.convertData(this.FoodDetailData);
        this.food_detail = this.convertData(this.FoodDetailData);     
      },
    );
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

  test(){
    console.log("FoodID",this.food_detail);
    
    
    
  }

}
