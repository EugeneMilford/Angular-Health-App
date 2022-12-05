import { Food } from "./food.model";

export class FoodService {
  private foods: Food[] = [
    new Food(
      'yogurt',
      'A great way to start the day',
      '07:00',
      'https://post.healthline.com/wp-content/uploads/2021/10/fruit-berries-yogurt-732x549-thumbnail.jpg'),
    new Food(
      'fruit salad',
      'Great choice for lunch',
      '12:30',
      'https://thumbs.dreamstime.com/z/fresh-fruit-salad-bowl-healthy-wooden-background-top-view-51971994.jpg')
  ];

  getFoods() {
    return this.foods.slice();
  }
}
