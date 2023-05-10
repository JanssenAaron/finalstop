import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product'
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})

export class ProductInfoComponent implements OnInit{

  @Input()
  id = 0

  showMore = false

  product: Product = {
    id: this.id,
    catergory: "",
    description: "",
    image: "",
    price: 0.0,
    ratingCount:  0,
    rating:  0.0,
    title: "",
  }

  ShowMore(){
    this.showMore = !this.showMore
  }

  addToCart(){
    console.log("Calling atc service")
    this.cartService.addToCart(this.product.id)
  }


  constructor(private prodService: ProductServiceService, private cartService: CartService, private loginService: LoginService){

  }

  ngOnInit() {
    this.prodService.getProduct(this.id).subscribe((prod) => {
      this.product = prod
    })
  }


}
