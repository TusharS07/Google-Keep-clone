import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Service/UserService/user.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

forgotPassword!: FormGroup;
hide: Boolean = true;

constructor(
  private formBuilder: FormBuilder,
  private userService: UserService,
  private snackBar: MatSnackBar
){}


ngOnInit(): void {
  this.forgotPassword = this.formBuilder.group({
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmNewPassword: ['', [Validators.required, Validators.minLength(6)]]
  }
  //,{
  //   validator: this.passwordMatchingCheck('newPassword', 'confirmNewPassword')
  // }
  );

}


passwordMatchingCheck(passwordKey: any, confirmPasswordKey: any) {
  return (group: FormGroup) => {
    const password = group.controls[passwordKey];
    const confirmPassword = group.controls[confirmPasswordKey];

    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}

showPassword() {
  this.hide = !this.hide;
}

submit(){
  if (this.forgotPassword.valid) {
    console.log("forgotPassword Data :", this.forgotPassword.value);


    this.userService.forgotPassword(this.forgotPassword.value.confirmNewPassword).subscribe((result: any) => {
      console.log(result);
      this.snackBar.open(result.message, '', {
        duration: 2000
      });
    })
  } else {
    this.snackBar.open("please enter valid credential's", '', {
      duration: 2000
    });
  }
}
  

}
