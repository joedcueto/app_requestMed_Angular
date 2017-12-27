import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers } from 'angular2/http';
import {Employee} from '../../../models/employee';
import {RequestMed} from '../../../models/request';
import {Medicine} from '../../../models/medicine';
import {Symptom} from '../../../models/symptom';
import 'rxjs/add/operator/map';


@Component({
  selector: 'requestmed-list',
  templateUrl: './requestmed-list.html',
  //styleUrls: ['./app.css'],
  moduleId: module.id,

  directives: [ROUTER_DIRECTIVES]
})
export class RequestMedList implements OnInit {

  employees: Employee[] = [];
  requests: RequestMed[] = []

  constructor(private http: Http) {}

  ngOnInit() {
    console.log('start of initjoed');
    var url = '/requestMed/viewRequestList/1';
    console.log('dddd');
    this.http.get(url, this.requestOptions)
      .map(res => res.json())
      .subscribe(
        (requests) => {
          requests.forEach((requestData: Object) => {
            var request: RequestMed = new RequestMed();
            request.setRequestId(requestData.requestId);
            request.setStatus(requestData.status);
            request.setStatusName(requestData.statusName);
            var employee: Employee = new Employee(requestData.employee);
            request.setEmployee(employee);
            this.employees.push(employee);

            var symptom: Symptom = new Symptom(requestData.symptom);
            request.setSymptom(symptom);

            var medicine: Medicine = new Medicine(requestData.medicine);
            request.setMedicine(medicine);
            this.requests.push(request);
            console.log(request);
          });
          //console.log(this.users);
        }
      );
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
