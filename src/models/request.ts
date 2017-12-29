import {Employee} from './Employee';
import {Medicine} from './Medicine';
import {Symptom} from './Symptom';
import {Status} from './Status';

export class RequestMed {
  requestId:number;
  employee:Employee;
  medicine:Medicine;
  status:Status;
  statusName:string;
  symptom:Symptom;

  constructor() {
    
  }

  //we need to update the API such that it will return a list of employee object with request as part of its properties

  setEmployee(employee : Employee){
  	this.employee = employee;
  }

  setSymptom(symptom : Symptom){
  	this.symptom = symptom;
  }

  setMedicine(medicine : Medicine){
  	this.medicine = medicine;
  }

  
  setRequestId(requestId: number){
  	this.requestId = requestId;
  }

  setStatus(status: Status){
  	this.status = status;
  }  

}
