import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  food_detail: fooddetail | null = null;
  foodId!: string;
   

  constructor(private apiService: ServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.foodId = params['foodId'];
      console.log('Food Id:', this.foodId);
      // สามารถใช้ this.foodId ในการเรียก API หรือประมวลผลข้อมูลต่อไปได้
    });
    this.apiService.getFoodById(this.foodId).subscribe((data: any) => {
      this.food_detail = data; 
      console.log('Food Douad:',this.food_detail);
    }, error => {
      console.error(error);
    });
  }
  
  test(){
    console.log("FoodID",this.foodId);
    
    
  }

  // recipe = {
  //   id: "45",
  //   title: "Smoky chipotle tofu with tomatoes and avocado",
  //   difficulty: "Easy",
  //   portion: "Serves 2-3",
  //   time: "Hands-on time 15 min. Simmering time 7-8 min",
  //   description: "Pair warm, intensely smoky, chipotle tofu with soothing smashed avocado. This vegan combo is incredible on toast or in breakfast tacos.",
  //   ingredients: [
  //     "2 tbsp olive oil",
  //     "225g block smoked firm tofu, cut into small cubes",
  //     "3 tbsp chipotles in adobo",
  //     "½ tsp sea salt",
  //     "3 spring onions, finely sliced",
  //     "150g cherry tomatoes, halved",
  //     "Tacos or toast to serve",
  //     "1 large avocado",
  //     "Grated zest and juice 1 lime",
  //     "Garlic cloves",
  //     "Chilli oil or Korean chilli flakes",
  //     "Chopped coriander, chervil, tarragon, basil or dill",
  //     "Drizzle of tahini"
  //   ],
  //   method: [
  //     {
  //       "Step 1": "For the smashed avocado, cut the avocado in half and discard the stone. Mash the garlic, if using, with ½ tsp salt using a knife or pestle and mortar. Mash with the avocado, then add the lime zest and juice (and, if using, the chilli oil/flakes, herbs and tahini). Season to taste."
  //     },
  //     {
  //       "Step 2": "Heat a frying pan over a medium-high heat and, when hot, add the olive oil, then the tofu. Fry for a few minutes until crisp, then add the chipotles. Stir-fry for a few minutes, seasoning with the sea salt, then add the spring onions and tomatoes. Turn the heat to medium and cook for 7-8 minutes until the tomatoes begin to break down. Taste and adjust the seasoning, then serve with the smashed avocado, in tacos or on toast."
  //     }
  //   ],
  //   image: "https://apipics.s3.amazonaws.com/vegan_api/45.jpg"
  // };
  // convertData(data:any):any[]{
  //   let _data =[];
  //   for(let i=0;i<data.length;i++){
  //     _data.push({
  //       'title': (data[i]['title']||""),
  //       'difficulty': (data[i]['difficulty']||""),
  //       'image' : (data[i]['image']||""),
  //       'id' : (data[i]['id']||""),
  //       'portion' : (data[i]['portion']||""),
  //       'time' : (data[i]['time']||""),
  //       'description' : string;
  //       'ingredients' : string;
  //       'method' : string;
  //     })
  //     console.log("This",data.length);
      
  //   }
  //   return _data;
  // }
}
