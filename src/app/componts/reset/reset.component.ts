import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  reset!: FormGroup;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.reset = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })

  }

  // forgotPassword() {
  //   // this.route.navigateByUrl('/forgot-password')
  // }

  resetPass() {
    if (this.reset.valid) {
      // console.log("reset Data :", this.reset.value);

      let sendData = {
        email: this.reset.value.email,
      }

      this.userService.reset(sendData).subscribe((result: any) => {
        console.log(result);
        this.snackBar.open(result.message, '', {
          duration: 4000
        });
      })
    } else {
      this.snackBar.open("please enter valid credential's", '', {
        duration: 2000
      });
    }
  }

}
