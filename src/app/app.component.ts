import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { Student } from './student';
import { UserService } from './user.service';
/***
 * Fake API created at https://mocki.io/fake-json-api
 *
 * **/
interface User {
  name: string;
  city: string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular ' + VERSION.major;
  //url = 'https://mocki.io/v1/d9df7a23-63e6-4bb0-861a-ff9a1cb2172c';
  url = 'blah';
  user: User;
  errorMsg: string;

  subscription;

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      let charArr = data.characters;
      charArr.map((item: User) => console.log(item.name));
    });

    console.log('###########################');

    this.userService.getUsersManually().subscribe((data) => {
      console.log(data);
    });

    let myObservable = this.userService.getUsersManually();

    // Create observer object
    let myObserver = {
      next: (students: Student[]) => {
        console.log('Observer got a next value: ');
        students.map((student: Student) => {
          if (student.current) {
            this.userService.setCurrentStudent(student);
          }
        });
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    this.subscription = myObservable.subscribe(myObserver);
  }

  onShowCurrentUser(event) {
    console.log(event);
    let currentStudent = this.userService.getCurrentStudent();
    if (!currentStudent) {
      console.log('Current Student is empty');
    } else {
      console.log(currentStudent);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
