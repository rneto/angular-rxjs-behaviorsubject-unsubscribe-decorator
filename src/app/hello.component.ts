import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './user.service';

@Component({
  selector: 'hello',
  template: `
    <h1 *ngIf="username">Hello {{ username }}!</h1>
  `
})
export class HelloComponent implements OnInit, OnDestroy {
  username: string;

  private userServiceSubscription: Subscription | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userServiceSubscription = this.userService.currentUser.subscribe(
      currentUser => {
        this.username = currentUser.username;
      }
    );
  }

  ngOnDestroy(): void {
    this.userServiceSubscription?.unsubscribe();
  }
}