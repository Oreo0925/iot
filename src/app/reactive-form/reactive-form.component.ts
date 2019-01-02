import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { mergeMap, debounceTime } from 'rxjs/operators';

/*
自定義驗證
*/
function SetMinLength(len: number): ValidatorFn {
  return (c: AbstractControl) => {
    if (c.value.length < len) {
      return {'customLength': true};
    }
  };
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  formData = this.fb.group({
    name: ['', [SetMinLength(10)]],
    phone: '',
    emailGroup: this.fb.group({
      email: ['', [Validators.required]]
    }),
    send: '',
    notifyWay: 'email',
    addressList: this.fb.array([this.createAddressList()])
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.formData.get('notifyWay').valueChanges
    .subscribe(notifyWay => {
      console.log(notifyWay);
      if (notifyWay === 'text') {
        this.formData.get('phone').setValidators([Validators.required]);
        this.formData.get('phone').updateValueAndValidity();
        this.formData.get('text').clearValidators();
        this.formData.get('text').updateValueAndValidity();
      } else if (notifyWay === 'email') {
        this.formData.get('phone').clearValidators();
        this.formData.get('phone').updateValueAndValidity();
        this.formData.get('text').setValidators([Validators.required]);
        this.formData.get('text').updateValueAndValidity();
      }
    });

    this.formData.get('name').valueChanges.pipe(
      debounceTime(500), mergeMap(inputValue => this.http.get('')))
      .subscribe(data => console.log(data) );
  }

  createAddressList() {
    return this.fb.group({
      addressType: 'home',
      city: '',
      area: '',
      zipcode: '',
      address: ''
    });
  }

  get addressListArray() {
    return this.formData.get('addressList') as FormArray;
  }

  addNew() {
    this.addressListArray.push(this.createAddressList());
  }

  remove(index) {
    console.log(index);
    this.addressListArray.removeAt(index);
  }

}
