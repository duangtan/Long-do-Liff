import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
   

  constructor(private apiService: ServiceService,private route: ActivatedRoute,private router: Router) { }

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
  
  goHome(){
    this.router.navigate(['/menu']); 
  }

  convertData(data:any):FoodDetail{
    return {
      title: data.title || "",
      difficulty: data.difficulty || "",
      image: data.image || "",
      id: data.id || "",
      portion: data.portion || "",
      time: data.time || "",
      description: data.description || "",
      ingredients: data.ingredients.join("\n") || "", // แปลงอาเรย์ของส่วนประกอบให้เป็น string โดยใช้ join
      method: data.method.map((step: any) => Object.values(step)[0]).join("\n") || "" // แปลงอาเรย์ของวิธีการทำเป็น string โดยใช้ map เพื่อดึงค่าของขั้นตอนแล้วใช้ join
    };
  }

}
