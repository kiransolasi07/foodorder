import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { FoodService } from 'app/services/food/food.service';
import { Cart } from 'app/shared/models/Cart';
import { CartItem } from 'app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  cart!: Cart;
  constructor(private cartService: CartService, private foodService:FoodService){
    let foods = foodService.getAll();
    //after design this page remove
    // cartService.addToCart(foods[1]);
    // cartService.addToCart(foods[3]);
    // cartService.addToCart(foods[5]);
    this.setCart();
  }
  ngOnInit(): void {
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
