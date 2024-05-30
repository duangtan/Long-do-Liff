import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
export interface CocktailDetail{
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
  selector: 'app-detail-cocktail',
  templateUrl: './detail-cocktail.component.html',
  styleUrls: ['./detail-cocktail.component.css']
})
export class DetailCocktailComponent {
  cocktail_detail: CocktailDetail | null = null;
  cocktailId!: string;
   

  constructor(private apiService: ServiceService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cocktailId = params['cocktailId'];
      this.getCocktailDetail(this.cocktailId);
    });
  }
  getCocktailDetail(cocktailId: string): void {
    this.apiService.getCocktailById(this.cocktailId).subscribe(
      (data: CocktailDetail) => {
        this.cocktail_detail = data;  
        this.convertData(this.cocktail_detail);
      },
      (error) => {
        console.error('Error fetching food details:', error);
      }
    );
  }
  
  goHome(){
    this.router.navigate(['/cocktail']); 
  }

  convertData(data:any):CocktailDetail{
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

//ทำไมต้องใช้ join
// การแสดงผลที่อ่านง่าย: การรวมค่าในอาเรย์ให้เป็นสตริงโดยใช้ newline (\n) ทำให้การแสดงผลในรูปแบบข้อความอ่านง่ายและเป็นระเบียบ
// การนำไปใช้ในที่ต่าง ๆ: บางครั้งข้อมูลที่เก็บในรูปแบบอาเรย์ไม่สามารถนำไปใช้ตรง ๆ ในบางสถานการณ์ เช่น การแสดงผลในอินเตอร์เฟซผู้ใช้ หรือการเก็บในรูปแบบที่ต้องการสตริง
// การเก็บข้อมูลในรูปแบบที่เหมาะสม: การแปลงอาเรย์เป็นสตริงช่วยให้การจัดเก็บข้อมูลในฐานข้อมูลหรือการส่งข้อมูลผ่าน API ทำได้ง่ายและเป็นมาตรฐานเดียวกัน