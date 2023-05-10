import { Time} from "@angular/common"
import {Product} from "./product"



export interface Order {
    orderTime: Time
    orderDate: Date
    productids: number[]
}