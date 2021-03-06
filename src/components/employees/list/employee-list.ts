import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers } from 'angular2/http';
import {Employee} from '../../../models/employee';
import {RequestMed} from '../../../models/request';
import {Medicine} from '../../../models/medicine';
import 'rxjs/add/operator/map';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.html',
  //styleUrls: ['./app.css'],
  moduleId: module.id,

  directives: [ROUTER_DIRECTIVES]
})
export class EmployeeList implements OnInit {

  employees: Employee[] = [];
  requests: RequestMed[] = [];

  constructor(private http: Http) {}

  ngOnInit() {
    console.log('start of initjoed');
   
  }

headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Credentials' :'true',
}

requestOptions = {
    headers: new Headers(this.headerDict)
};

  deleteModel(employee: Employee) {
    if (confirm('Are you sure you want to delete employee ' + employee.id)) {
      this.http.delete('/employees/' + employee.id)
        .subscribe(
          (response) => {
            if (response.status === 204) {
              this.employees.forEach((e: Employee, i: number) => {
                if (e.id === employee.id) {
                  this.employees.splice(i, 1);
                }
              });
              console.log(this.employees);
            }
          }
        );
    }
  }


}
