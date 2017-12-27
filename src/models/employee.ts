import {RequestMed} from './request';

export class Employee {
  id:number;
  firstName:string;
  lastName:string;
  marketCircleId:number;
  circleName:string;
  requestMeds: RequestMed[] = [];

  setId(id:number){
  	this.id = id;
  }

  setFirstName(firstName: string){
  	this.firstName = firstName;
  }

   setLastName(lastName: string){
  	this.lastName = lastName;
  }

  setMarketCircleId(marketCircleId:number){
  	this.marketCircleId = marketCircleId;
  }

  setCircleName(circleName: string){
  	this.circleName = circleName;
  }

  setRequestMeds(requestMeds : RequestMed[]){
  	this.requestMeds = requestMeds;
  }

}
