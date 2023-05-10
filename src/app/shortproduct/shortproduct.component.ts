import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-shortproduct',
  templateUrl: './shortproduct.component.html',
  styleUrls: ['./shortproduct.component.css']
})
export class ShortproductComponent implements OnInit{


  @Input()
  id: number = 0

  prod: Product = {
    id: this.id,
    catergory: "",
    description: "",
    image: "",
    price: 0.0,
    ratingCount:  0,
    rating:  0.0,
    title: "",
  }

  constructor(private prodService: ProductServiceService){}

  ngOnInit(): void {
    this.prodService.getProduct(this.id).subscribe((prod) => {
      this.prod = prod
    })
  }
  }

