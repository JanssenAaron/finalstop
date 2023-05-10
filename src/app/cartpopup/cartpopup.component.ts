import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-cartpopup',
  templateUrl: './cartpopup.component.html',
  styleUrls: ['./cartpopup.component.css']
})
export class CartpopupComponent implements OnInit{

  constructor(private cartService: CartService, private loginServer: LoginService, private prodServer: ProductServiceService) {}

  products: number[] =[]
  username: string = ""
  cartTotal: number = 0.0

  ngOnInit(): void {
      this.username = this.loginServer.getUsername()
      
      this.cartService.getCartItems().subscribe(data => {
        this.products = data[this.username]
        
      })
      this.prodServer.getProducts().subscribe(prods => {
        this.cartTotal = 0
        for(let id of this.products){
          console.log(prods)
          this.cartTotal += prods[id-1].price
        }
      })

  }


}
