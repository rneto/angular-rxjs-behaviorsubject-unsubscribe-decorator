import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  template: `
    <input #username type="text" placeholder="What is your name?">
    <button (click)="saveUserName(username.value)">Save</button>
    <div *ngIf="showSay">
      <a [routerLink]="['/hello']">Say hello</a>
      <br/>
      <a [routerLink]="['/goodbye']">Say goodbye</a>
      <p>Open the console to view the unsubscribe logs by navigating between the hello and goodbye components.</p>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  showSay: boolean = false;

  constructor(private userService: UserService) {}

  saveUserName(username: string) {
    this.userService.setCurrentUser({ username: username });
    this.showSay = true;
  }
}
