import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formData = new FormGroup({
    name: new FormControl(),
    address: new FormArray([
      new FormControl()
    ], {updateOn: 'blur'}),
    phones: new FormArray([
      new FormGroup({
        phoneNumber: new FormControl(),
      }),
      new FormGroup({
        phoneNumber: new FormControl(),
      }),
      new FormGroup({
        phoneNumber: new FormControl(),
      })
    ])
  });

  formDate2 = this.fb.group({
    items: this.fb.array([
    ])
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  get address() {
    return this.formData.get('address') as FormArray;
  }
  get phones() {
    return this.formData.get('phones') as FormArray;
  }

  removePhone(idx) {
    this.phones.removeAt(idx);
  }

  addPhone() {
    this.phones.push(new FormGroup({
      phoneNumber: new FormControl('新增電話')
    }));
  }

  insertPhone(idx) {
    this.phones.insert(idx + 1, new FormGroup({
      phoneNumber: new FormControl('插入電話')
    }));
  }

  clearLastPhone() {
    while (this.phones.length > 1) {
      this.phones.removeAt(1);
    }
  }

  resetPhone() {
    this.phones.reset([{phoneNumber: '00-000000'}]);
  }

  resetFormDate() {
    this.formData.reset({phoneNumber: '00-000000'});
  }
}
