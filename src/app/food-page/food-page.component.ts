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
        'image' : (data[i]['image']||""),
        'id' : (data[i]['id']||""),
      })
      console.log("This",data.length);
      
    }
    return _data;
  }
  getDetail(foodId: string) {
    this.apiService.getFoodById(foodId).subscribe(
      (data) => {
        // ทำสิ่งที่คุณต้องการกับข้อมูลที่ได้รับคืน เช่น การเปลี่ยนหน้า
        console.log('Food Detail:', data);
        // ทำการเปลี่ยนหน้าหรือทำสิ่งอื่นตามต้องการ
        this.router.navigate(['/fooddetail']); // ให้เปลี่ยนไปยังหน้าใหม่ที่คุณต้องการ
      },
      (error) => {
        console.error('Error fetching food detail:', error);
      }
    );
  }


}
