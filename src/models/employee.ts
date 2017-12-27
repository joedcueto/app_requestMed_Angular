import {Model} from './model';

export class Employee extends Model {
  id:number;
  firstName:string;
  lastName:string;
  marketCircleId:number;
  circleName:string;

  attributeNames: string[] = ['id', 'firstName', 'lastName', 'marketCircleId', 'circleName'];

}
