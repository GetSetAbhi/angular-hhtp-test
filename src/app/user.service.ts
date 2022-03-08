import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, observable, Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  api_url = 'https://mocki.io/v1/2bb1d1e8-2847-4a5e-9234-baa56f6c962f';

  students = [
    {
      id: 1,
      name: 'Krunal',
      enrollmentnumber: 110470116021,
      college: 'VVP Engineering College',
      university: 'GTU',
    },
    {
      id: 2,
      name: 'Rushabh',
      enrollmentnumber: 110470116023,
      college: 'VVP Engineering College',
      university: 'GTU',
    },
    {
      id: 3,
      name: 'Ankit',
      enrollmentnumber: 110470116022,
      college: 'VVP Engineering College',
      university: 'GTU',
    },
  ];

  getUsers() {
    return this.http.get<any>(this.api_url);
  }

  getUsersManually() {
    let myObservable = new Observable((observer) => {
      observer.next(this.students);
    });

    return myObservable;
  }
}
