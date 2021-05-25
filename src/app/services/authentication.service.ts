import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../domain/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authtoken: any;
  isLoggedIn = new BehaviorSubject(false);

  host:string =  environment.appUrl;
  constructor(private http:HttpClient) { }

  public register(user:any):Observable<any>{
    return this.http.post<any>(`${this.host}/register`, user);
  }

  public login(user:any):Observable<any>{
    return this.http.post<any>(`${this.host}/login`, user, {observe: 'response'}).pipe(
      tap(()=>{
        this.isLoggedIn.next(true);
      } )
    );
  }

//FUNCTION Load token from local storage
  public loadToken(){
    const token = localStorage.getItem('token');
    this.authtoken = token;
  }

   //FUNCTION Log Out 
   public logout(){
    this.authtoken = null;
    this.isLoggedIn.next(false);
    localStorage.clear();
  }


}
