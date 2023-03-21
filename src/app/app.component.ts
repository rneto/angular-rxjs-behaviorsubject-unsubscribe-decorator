import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  template: `
    <input #username type="text" placeholder="What is your name?">
    <button (click)="saveUserName(username.value)">Save</button>

    <hello></hello>
  `
})
export class AppComponent {
  constructor(private userService: UserService) {}

  saveUserName(username: string) {
    this.userService.setCurrentUser({ username: username });
  }
}