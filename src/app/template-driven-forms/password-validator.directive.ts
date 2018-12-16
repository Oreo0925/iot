import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[validatorPassword][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }
  ]
})

export class PasswordValidatorDirective  implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = validatePasswordFactory();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }
}
function validatePasswordFactory(): ValidatorFn {
  return (c: AbstractControl) => {
    const isValid = c.value === c.parent.value.password;
    if (isValid) {
        return null;
    } else {
        return {
            passwordDifferent: true
        };
    }
  };
}
