import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers } from 'angular2/http';
import {Employee} from '../../../models/employee';
import {RequestMed} from '../../../models/request';
import {Medicine} from '../../../models/medicine';
import {Symptom} from '../../../models/symptom';
import {Status} from '../../../models/status';
import 'rxjs/add/operator/map';


@Component({
  selector: 'requestmed-list',
  templateUrl: './requestmed-list.html',
  //styleUrls: ['./app.css'],
  moduleId: module.id,

  directives: [ROUTER_DIRECTIVES]
})
export class RequestMedList implements OnInit {

  requests: RequestMed[] = [];
  employee: Employee = new Employee();

  constructor(private http: Http) {}

  ngOnInit() {
    console.log('start of initjoed');
    var url = '/requestMed/viewRequestListByEmpId';
    console.log('dddd');
    var employeeReq: Employee = new Employee();
    employeeReq.setId(1);
    this.http.post(url, JSON.stringify(employeeReq), this.requestOptions)
      .map(res => res.json())
      .subscribe(
        (emp) => {
            this.employee.setId(emp.id);
            this.employee.setFirstName(emp.firstName);
            this.employee.setLastName(emp.lastName);
            this.employee.setMarketCircleId(emp.marketCircleId);
            this.employee.setCircleName(emp.circleName);
            var objects : RequestMed[] = emp.requestMeds;
            for (var i=0; i<objects.length; i++){
                var request: RequestMed = new RequestMed();
                request.setRequestId(objects[i].requestId);

                var status: Status = new Status(objects[i].status);
                request.setStatus(status);
                          

                var symptom: Symptom = new Symptom(objects[i].symptom);
                request.setSymptom(symptom);

                var medicine: Medicine = new Medicine(objects[i].medicine);
                request.setMedicine(medicine);
                this.requests.push(request);
            }            

            this.employee.setRequestMeds(this.requests);
            console.log(this.employee);
        });
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



}
