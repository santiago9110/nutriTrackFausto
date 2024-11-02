import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3000/users";

  constructor(private _httpService: HttpClient) { }

  getUserById(id: number): Observable<User> {
    return this._httpService.get<User>(`${this.baseUrl}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this._httpService.post<User>(this.baseUrl, user).pipe(
      tap((user) => {
        // Guarda el ID del usuario registrado en localStorage
        const id = String(user.id)
        localStorage.setItem('userToken', id || ''); // Aquí guardas el ID generado
        console.log(localStorage.getItem('userToken'));
      })
    );
  }
}
