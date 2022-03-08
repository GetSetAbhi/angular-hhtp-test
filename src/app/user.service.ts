import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, observable, Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentStudent$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  api_url = 'https://mocki.io/v1/2bb1d1e8-2847-4a5e-9234-baa56f6c962f';

  students = [
    {
      id: 1,
      name: 'Krunal',
      enrollmentnumber: 110470116021,
      college: 'VVP Engineering College',
      university: 'GTU',
      current: true,
    },
    {
      id: 2,
      name: 'Rushabh',
      enrollmentnumber: 110470116023,
      college: 'VVP Engineering College',
      university: 'GTU',
      current: false,
    },
    {
      id: 3,
      name: 'Ankit',
      enrollmentnumber: 110470116022,
      college: 'VVP Engineering College',
      university: 'GTU',
      current: false,
    },
  ];

  getUsers() {
    return this.http.get<any>(this.api_url);
  }

  getUsersManually(): Observable<Student[]> {
    let myObservable = new Observable<Student[]>((observer) => {
      observer.next(this.students);
    });

    return myObservable;
  }

  setCurrentStudent(student: Student) {
    if (student) {
      this.currentStudent$.next(student);
    }
  }

  getCurrentStudent(): Student {
    return this.currentStudent$.getValue();
  }
}
