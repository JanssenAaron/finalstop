import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username = ""

  constructor() { }

  getUsername(): string{
    return this.username
  }

  setUsername(username: string) {
    console.log(username)
    this.username = username
  }
}
