import {Employee} from './Employee';
import {Medicine} from './Medicine';
import {Symptom} from './Symptom';

export class RequestMed {
  requestId:number;
  employee:Employee;
  medicine:Medicine;
  status:number;
  statusName:string;
  symptom:Symptom;

  constructor() {
    
  }

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

  setStatus(status: number){
  	this.status = status;
  }

  setStatusName(statusName: string){
  	this.statusName = statusName;
  }

}
