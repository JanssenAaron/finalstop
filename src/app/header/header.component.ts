import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CartpopupComponent } from '../cartpopup/cartpopup.component';
import { OrderService } from '../order.service';
import { OrderspopupComponent } from '../orderspopup/orderspopup.component';
import { SearchpopupComponent } from '../searchpopup/searchpopup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  loggedIn = false
  constructor(private userService: UserService, private cartService: CartService, private loginService: LoginService, public dialog: MatDialog, private orderService: OrderService) {

  }


  loginUser(username: string) {
    this.userService.login(username).subscribe(user => {
      if (user == undefined) {
        console.log("login failed")
      }
      else {
        this.loggedIn = true
        console.log(user)
        this.loginService.setUsername(user['user']['username'])
      }

    })
  }
  createUser(username: string){
    this.userService.createUser(username)
  }

  viewCart(){
    this.cartService.getCartItems()
  }

  openDialog(){
    this.dialog.open(CartpopupComponent)
  }
  openOrderDialog(){
    this.dialog.open(OrderspopupComponent)
  }

  checkout(){
    this.orderService.createOrder()
  }

  openSearchDialog(searchString: string){
    
    this.dialog.open(SearchpopupComponent, {data:{
    search: searchString
  }
}
  )
}

}
