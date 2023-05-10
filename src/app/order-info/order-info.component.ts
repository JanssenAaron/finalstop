import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../order';
@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent  {

  @Input()
  order: Order = {
    orderDate: new Date(),
    orderTime: {minutes:0, hours:0},
    productids: []
  }

}
