import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

getAllUser():Observable<User[]> {
  let host=environment.host;
  return this.http.get<User[]>(host+"/users");
}
getCompletedUser():Observable<User[]> {
  let host=environment.host;
  return this.http.get<User[]>(host+"/users?completed=true");
}


}
