import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { AutoUnsubscribe } from './auto-unsubscribe.decorator';
import { UserService } from './user.service';

@AutoUnsubscribe
@Component({
  selector: 'hello',
  template: `
    <h1 *ngIf="username">Hello {{ username }}!</h1>
  `,
})
export class HelloComponent implements OnInit {
  username: string;
  mySubject$ = new BehaviorSubject<string>('Initial Value');

  private userServiceSubscription: Subscription | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userServiceSubscription = this.userService.currentUser.subscribe(
      (currentUser) => {
        this.username = currentUser.username;
      }
    );
  }
}
