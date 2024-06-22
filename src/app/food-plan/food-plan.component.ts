import { Component } from '@angular/core';

@Component({
  selector: 'app-food-plan',
  templateUrl: './food-plan.component.html',
  styleUrls: ['./food-plan.component.css']
})
export class FoodPlanComponent {
  foodPlan = [
    { name: 'Tomato Omelette', kcal: 489, price: '$4.99', image: 'path/to/image.jpg' },
    // Add more planned meals
  ];

  createMeal() {
    // Logic to create a new meal
  }
}
