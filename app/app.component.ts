import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">
            My Angular 2 app!
          </a>
        </div>
      </nav>
      <main>
        <div class="row">
          <div class="col-sm-4">
            <h2>List users</h2>
            <div *ngIf="users">
              <ul class="list-group users-list">
                <li class="list-group-item"
                  *ngFor="let user of users"
                  (click)="selectUser(user)">
                  The user is {{user.name}} ({{user.username}})
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="jumbotron" *ngIf="activeUser">
              <h1>
                Welcome to Our App!
              </h1>
              <p>{{activeUser.name}}<small>{{activeUser.username}}</small></p>
            </div>
          </div>
        </div>
      </main>

    <footer class="text-center">
      CopyRight &copy; 2018
    </footer>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {
  message = 'Hello angular 2!';
  users = [
    {id: 1, name: 'A', username: 'a'},
    {id: 2, name: 'B', username: 'b'},
    {id: 3, name: 'C', username: 'c'}
  ];
  activeUser;

  selectUser(user) {
    this.activeUser = user;
  }
}
