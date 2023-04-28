import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login!: FormGroup;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  loginUser() {
    if (this.login.valid) {
      console.log("Login Data :", this.login.value);

      let sendData = {
        email: this.login.value.email,
        password: this.login.value.password
      }

      this.userService.login(sendData).subscribe((result: any) => {
        console.log(result);
        this.snackBar.open("Login Successfully!", '', {
          duration: 2000
        });

        localStorage.setItem('token', result.id);

        this.route.navigateByUrl('/dashbord')
      })
    } else {
      this.snackBar.open("please enter valid credential's", '', {
        duration: 2000
      });
    }

  }
}
