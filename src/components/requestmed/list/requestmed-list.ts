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

  requests: RequestMed[] = [];
  employee: Employee = new Employee();

  constructor(private http: Http) {}

  ngOnInit() {
    console.log('start of initjoed');
    var url = '/requestMed/viewRequestList/1';
    console.log('dddd');
    this.http.get(url, this.requestOptions)
      .map(res => res.json())
      .subscribe(
        (requests) => {
         requests.forEach((requestData: RequestMed) => {
            console.log(requestData);
            
            this.employee.setId(requestData.employee.id);
            this.employee.setFirstName(requestData.employee.firstName);
            this.employee.setLastName(requestData.employee.lastName);
            this.employee.setMarketCircleId(requestData.employee.marketCircleId);
            this.employee.setCircleName(requestData.employee.circleName);
            
            var request: RequestMed = new RequestMed();
            request.setRequestId(requestData.requestId);
            request.setStatus(requestData.status);
            request.setStatusName(requestData.statusName);           

            var symptom: Symptom = new Symptom(requestData.symptom);
            request.setSymptom(symptom);

            var medicine: Medicine = new Medicine(requestData.medicine);
            request.setMedicine(medicine);
            this.requests.push(request);
            console.log(request);
          });
          this.employee.setRequestMeds(requests);
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



}
