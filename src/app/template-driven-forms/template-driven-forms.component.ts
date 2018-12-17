import { Component, OnInit } from '@angular/core';
import { MatRadioButton } from '@angular/material';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  passwordAgain = '';
  showContext = 'registered';
  showBtnClass;
  loginError = null;

  constructor() { }

  ngOnInit() {

  }
  changeContext(text) {
    if (text === this.showContext) {
      return false;
    } else {
      return true;
    }
  }
  login(f) {
    if (f.value.loginId === 'adm' && f.value.password === '123') {
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }
  changePassword(f) {

  }
  register(f) {

  }
}
