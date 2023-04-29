import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/UserService/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  signup!: FormGroup;
  hide: Boolean = true;


  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private route: Router) { }

  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.passwordMatchingCheck('password', 'confirmPassword')
    });

  }

  showPassword() {
    this.hide = !this.hide;
  }

  passwordMatchingCheck(passwordKey: any, confirmPasswordKey: any) {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

  register() {
    if (this.signup.valid) {
      // console.log("Login Data :", this.signup.value);

      let sendData = {
        firstName: this.signup.value.firstName,
        lastName: this.signup.value.lastName,
        email: this.signup.value.email,
        password: this.signup.value.confirmPassword,
        service: "advance"
      }

      this.userService.registerUser(sendData).subscribe((result: any) => {
        console.log('Signed Up Is Successfull', result);
        this.snackBar.open("Signed Up Is Successfull!", '', {
          duration: 2000
        });
        this.route.navigateByUrl('/login')
      })
    } else {
      this.snackBar.open("please enter valid credential's", '', {
        duration: 2000
      });
    }
  }

}
