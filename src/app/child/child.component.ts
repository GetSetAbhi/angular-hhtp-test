import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { UserService } from '../user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  students$: Observable<Student[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.students$ = this.userService.getUsersManually();
  }
}
