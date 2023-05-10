import { Component, Input, OnInit } from '@angular/core';
import { ProductSelection } from '../product-selection';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent  implements OnInit{
  page: ProductSelection = {
    pageIndex: 0,
    pageSize: 10,
    length: 20,
    previousPageIndex: 0,
  }

  ids:number[] = []

  ngOnInit(): void {
    this.ids = []
    for(let i=0; i < this.page.pageSize/2; i++){
      this.ids.push(i+1+(this.page.pageIndex*10))
    }
  }

  handlePageEvent(e: PageEvent) {
    this.page.length = e.length;
    this.page.pageSize = e.pageSize;
    this.page.pageIndex = e.pageIndex;
    this.ids = []
    
    for(let i=0; i < this.page.pageSize/2; i++){
      this.ids.push(i+1+(this.page.pageIndex*10))
    }
    console.log(this.ids)


  }


}
