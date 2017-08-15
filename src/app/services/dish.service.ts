import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Dish[] {  // Dish[] means the return type is a Dish array
    return DISHES;
  }

  getDish(id: number): Dish {
    // es6 way
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish() : Dish {
    return DISHES.filter((dish) => (dish.featured))[0];
  }

}
