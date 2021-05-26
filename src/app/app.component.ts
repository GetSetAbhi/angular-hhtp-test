import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
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
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  url = 'https://mocki.io/v1/d9df7a23-63e6-4bb0-861a-ff9a1cb2172c';
  user: User;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<User>(this.url).subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }
}
