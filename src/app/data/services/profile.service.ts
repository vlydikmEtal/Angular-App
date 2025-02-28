import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile.inrerfaces';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  getTestProduct(): Observable<Profile[]> {
    return this.http.get<Profile[]>('https://fakestoreapi.com/products/');
  }
}
