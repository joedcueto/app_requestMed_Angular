import {Component} from 'angular2/core';
import {RequestMed} from '../../../models/request';
import {RequestFormComponent} from '../../../forms/request-form/request-form';

@Component({
  selector: 'request-create',
  templateUrl: './requestmed-create.html',
  //styleUrls: ['./app.css'],
  moduleId: module.id,
  directives: [RequestFormComponent]
})
export class RequestMedCreate {
  requestMed:RequestMed;

}
