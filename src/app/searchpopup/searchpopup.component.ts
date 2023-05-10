import { Component, Inject, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  search: string
}

@Component({
  selector: 'app-searchpopup',
  templateUrl: './searchpopup.component.html',
  styleUrls: ['./searchpopup.component.css']
})
export class SearchpopupComponent implements OnInit{

  ids: number[] = []
  constructor(private prodService: ProductServiceService, @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }

  ngOnInit(): void {
    this.prodService.getProducts().subscribe(prods => {
      for(let prod of prods){
        if (prod.title.includes(this.data.search)){
          this.ids.push(prod.id)
        }
      }
    })
  }

}
