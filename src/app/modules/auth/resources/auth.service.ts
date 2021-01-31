import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:4000/api/users/';
  
  constructor(
    private http: HttpClient
  ) { }


  login(email: string, password: string): Observable<any> {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:4000/api/users/signin',{email,password}, {headers})
  }

  getUser(): Observable<any> {
    return this.http.get('http://localhost:4000/api/users/currentuser')
  }
 
  register(email: string, password: string): Observable<any> {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:4000/api/users/signup',{email,password}, {headers})
  }

  signout(): Observable<any> {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:4000/api/users/signout', {headers})
  }

}
