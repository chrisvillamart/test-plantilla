import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private SERVER_URL = "https://jsonplaceholder.typicode.com/users";
  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string) {
    
    return this.httpClient.post(username, password);

  }

}