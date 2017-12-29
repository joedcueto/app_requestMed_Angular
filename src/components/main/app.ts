import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {UserList} from '../users/list/user-list';
import {EmployeeList} from '../employees/list/employee-list';
import {RequestMedList} from '../requestmed/list/requestmed-list';
import {RequestMedCreate} from '../requestmed/create/requestmed-create';
import {UserCreate} from '../users/create/user-create';
import {UserUpdate} from '../users/update/user-update';

@Component({
  selector: 'sd-app',
  viewProviders: [],
  moduleId: module.id,
  styleUrls: ['./app.css'],
  templateUrl: './app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/users', component: UserList, name: 'UserList' },
  { path: '/users/create', component: UserCreate, name: 'UserCreate' },
  { path: '/users/:id/update', component: UserUpdate, name: 'UserUpdate' },
  { path: '/employees', component: EmployeeList, name: 'EmployeeList' },
  { path: '/requests', component: RequestMedList, name: 'RequestMedList' },
  { path: '/requests/create', component: RequestMedCreate, name: 'RequestMedCreate' },
])
export class AppComponent {}
