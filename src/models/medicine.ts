import {Model} from './model';

export class Medicine extends Model {
  	medicineId:number;
 	medicineName:string;

  attributeNames: string[] = ['medicineId', 'medicineName'];

}