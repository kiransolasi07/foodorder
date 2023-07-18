import { Injectable } from '@angular/core';

import { Tag } from 'app/shared/models/Tag';
import { Foods } from 'app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods
  {
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return [
      { name: 'All',count: 14 },
      { name: 'FastFood',count: 4 },
      { name: 'Pizza',count: 2 },
      { name: 'Lunch',count: 3 },
      { name: 'SlowFood',count: 2 },
      { name: 'Humburger',count: 1 },
      { name: 'Fry',count: 1 },
      { name: 'Soup',count: 1 },

    ];
  }
  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 199,
        cookTime:'10-20',
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food1.jpg',
        tags: ['slowFood', 'Lunch'],

      },
      {
        id: 2,
        name: 'Meatball',
        price: 190,
        cookTime:'20-30',
        favorite: true,
        origins: ['italy','middle east','china'],
        star: 4.7,
        imageUrl: '/assets/food2.jpg',
        tags: ['slowFood', 'Lunch'],

      },
      {
        id: 3,
        name: 'Hamburgar',
        price: 179,
        cookTime:'10-20',
        favorite: false,
        origins: ['germany','us'],
        star: 4.5,
        imageUrl: '/assets/food3.jpg',
        tags: ['FastFood', 'Lunch'],

      },
      {
        id: 4,
        name: 'Fried potatoes',
        price: 90,
        cookTime:'15-20',
        favorite: true,
        origins: ['italy','belgium'],
        star: 4.5,
        imageUrl: '/assets/food4.jpg',
        tags: ['slowFood', 'Fry'],

      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 90,
        cookTime:'40-50',
        favorite: false,
        origins: ['india','asia'],
        star: 4.0,
        imageUrl: '/assets/food5.jpg',
        tags: ['slowFood', 'Soup'],

      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 149,
        cookTime:'20-30',
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food6.jpg',
        tags: ['slowFood', 'pizza','Lunch'],

      },
      {
        id: 7,
        name: 'Vegetables spicy Pizza',
        price: 199,
        cookTime:'10-20',
        favorite: false,
        origins: ['indian'],
        star: 4.5,
        imageUrl: '/assets/food7.jpg',
        tags: ['slowFood', 'Lunch'],

      },
      {
        id: 8,
        name: 'Vegetables burgur',
        price: 139,
        cookTime:'20-30',
        favorite: true,
        origins: ['indian'],
        star: 4.0,
        imageUrl: '/assets/food8.jpg',
        tags: ['slowFood', 'FastFood','Lunch'],

      }

    ];
  }
}
