import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AutoUnsubscribe } from './auto-unsubscribe.decorator';
import { UserService } from './user.service';

@AutoUnsubscribe
@Component({
  selector: 'goodbye',
  template: `
    <h1 *ngIf="username">Goodbye {{ username }}!</h1>
  `,
})
export class GoodbyeComponent implements OnInit {
  username: string;

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
