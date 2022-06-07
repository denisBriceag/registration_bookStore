import {
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function mustMatch(psswordValue: string, confirmPasswordValue: string) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[psswordValue];
    const confirmPassword = formGroup.controls[confirmPasswordValue];

    if (confirmPassword.errors && !confirmPassword.errors.mustMatch) {
      return;
    }

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mustMatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
  };
}

export function forbiddenNames(): ValidatorFn {
  return (control: FormControl): ValidationErrors | null => {
    return !!this.forbiddenNamesArray.includes(control.value)
      ? { name_is_okay: true }
      : null;
  };
}
