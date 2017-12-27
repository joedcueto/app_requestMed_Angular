import {Model} from './model';

export class Symptom extends Model {
  	symptomId:number;
 	symptomName:string;

  attributeNames: string[] = ['symptomId', 'symptomName'];

}