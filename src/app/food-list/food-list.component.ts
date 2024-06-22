import { Component } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foods = [
    { name: 'Chinese Meat Dumplings', description: '672 kcal per portion', price: '$5.99', image: 'path/to/image.jpg' },
    // Add more meals
  ];

  addToPlan(meal: any) {
    // Logic to add meal to the meal plan
    console.log(meal);
  }
}
