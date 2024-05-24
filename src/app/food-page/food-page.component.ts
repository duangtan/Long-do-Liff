import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food: any;

  constructor(private apiService: ServiceService) { }

  ngOnInit(): void {
    this.apiService.getVegFood().subscribe((data: any) => {
      this.food = data; // สมมติว่า API ตอบกลับข้อมูลเป็น JSON
      console.log(this.food);
    }, error => {
      console.error(error);
    });
  }

}
