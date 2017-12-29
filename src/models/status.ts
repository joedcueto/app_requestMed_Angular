import {Model} from './model';

export class Status extends Model {
  	statusId:number;
 	statusName:string;

  attributeNames: string[] = ['statusId', 'statusName'];

}