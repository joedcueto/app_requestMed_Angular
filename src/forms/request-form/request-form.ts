import {Component, Input, OnInit} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Router} from 'angular2/router';
import {ControlGroup, FormBuilder, Validators, NgClass, Control} from 'angular2/common';
import {User} from '../../models/user';
import {Employee} from '../../models/employee';
import {Medicine} from '../../models/medicine';
import {Symptom} from '../../models/symptom';
import {RequestMed} from '../../models/request';
import {AppValidators} from '../../validators';
import {ControlGroupHelper} from '../ControlGroupHelper';
import {FieldErrors} from '../../pipes/FieldErrors';


@Component({
  selector: 'request-form',
  moduleId: module.id,
  styleUrls: ['./request-form.css'],
  templateUrl: './request-form.html',
  pipes: [FieldErrors],
  directives: [NgClass]
})
export class RequestFormComponent implements OnInit{

  request: RequestMed = new RequestMed();
  requestForm: ControlGroup;
  medicines: Medicine[] = [];
  symptoms: Symptom[] = [];

  constructor(protected http: Http, protected router: Router, builder:FormBuilder) {
    this.requestForm = builder.group({
      medicine: ['', Validators.compose([Validators.required])],
      symptom: ['', Validators.compose([Validators.required])]      
    });
  }

  ngOnInit() {
    console.log('start of add');  

    var medurl = '/med/getAll';
    console.log('meds');
    this.http.get(medurl)
      .map(res => res.json())
      .subscribe(
        (meds) => {
          meds.forEach((med: Medicine) => {
            var medicine: Medicine = new Medicine(med);
            this.medicines.push(medicine);
          });
        }
      );

    var medurl = '/symptom/getAll';
    console.log('symtoms');
    this.http.get(medurl)
      .map(res => res.json())
      .subscribe(
        (sympts) => {
          sympts.forEach((symp: Symptom) => {
            var symptom: Symptom = new Symptom(symp);
            this.symptoms.push(symptom);
          });
        }
      );
  }

  /**
   * Handle errors
   * @param response
   */
  handleError(response: Response) {
    if (response.status === 422) {
      let errors : Object = response.json();
      console.log(errors);
      for (var field in errors) {
        var fieldErrors: string[] = (<any>errors)[field];
        ControlGroupHelper.setControlErrors(this.requestForm, field, fieldErrors);
      }
    }

    console.log(response);
  }
/*
  @Input()
  set model (user: User) {
    if (user) {
      this.user = user;
      ControlGroupHelper.updateControls(this.requestForm, this.user);
      console.log( (<Control>this.requestForm.controls['medicine']).errors);
    }
  }
*/
  onSubmit() {
    /*console.log(this.requestForm);
    if (!this.requestForm.valid) {
      return ;
    }

    this.user.attributes = this.requestForm.value;

    console.log(this.user);

    if (this.user.id) {
      this.http.put('/users/' + this.user.id, JSON.stringify({user: this.user}))
        .map(res => res.json())
        .subscribe(
          (data) => {
            this.router.navigate(['UserList']);
          },
          (response: Response) => {
            this.handleError(response);
          }
        );
    } else {
      this.http.post('/users', JSON.stringify({user: this.user}))
        .map(res => res.json())
        .subscribe(
          (data) => {
            this.user.id = data.id;
            this.router.navigate(['UserList']);
          },
          (response: Response) => {
            this.handleError(response);
          }
        );
    }*/
  }

}
