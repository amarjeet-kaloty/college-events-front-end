import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public registerFromRemote(user: User): Observable<User>{
    return this._http.post<User>('http://localhost:8080/register', user);
  }

}
