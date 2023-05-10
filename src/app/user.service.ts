import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from "./user"
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  createUser(username: string) {
    var body = {
      [username]: {
        user: {
          username: username
        }
      }
    }

    this.http.patch("https://finalexam-13182-default-rtdb.firebaseio.com/" + "users.json", body).subscribe(data => console.log(data))
  }

  login(username: string): Observable<any>{
    return this
    .http
    .get<{[username:string]: {user:  User}}>("https://finalexam-13182-default-rtdb.firebaseio.com/users.json")
    .pipe(map((data) => {
      for(let key in data) {
        if (key == username){
          return data[username]
        }
      }
      return undefined
    }))
  }

  

}
