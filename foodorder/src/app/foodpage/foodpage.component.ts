import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'app/services/cart.service';
import { FoodService } from 'app/services/food/food.service';
import { Foods } from 'app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService:FoodService, private cartService:CartService,
    private router:Router){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = foodService.getFoodById(params['id']);
      })
     }

  ngOnInit(): void {

  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
