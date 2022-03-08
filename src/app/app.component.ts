import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
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
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  //url = 'https://mocki.io/v1/d9df7a23-63e6-4bb0-861a-ff9a1cb2172c';
  url = 'blah';
  user: User;
  errorMsg: string;

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
      next: (x: any) => {
        console.log('Observer got a next value: ');
        console.log(x);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    myObservable.subscribe(myObserver);
  }
}
