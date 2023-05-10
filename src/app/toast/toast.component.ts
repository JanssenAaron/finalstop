import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  vis = false

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.currentMessage.subscribe(_ => {
      this.vis = true
      setTimeout((_: any) => {
        this.vis = false
      },2000)
    })
  }
}
