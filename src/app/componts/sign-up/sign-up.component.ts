import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 

  signup! : FormGroup;


  constructor( private  formBuilder:FormBuilder , private userService:UserService){}
  
  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      email : ['' ,[Validators.required , Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',[Validators.required, Validators.minLength(6)]]
    })

  }

  register(){
    if(this.signup.valid) {
      console.log("Login Data :", this.signup.value);

      let sendData = {
        firstName: this.signup.value.firstName,
        lastName: this.signup.value.lastName,
        email: this.signup.value.email,
        password: this.signup.value.confirmPassword,
        service: "advance"
      }

      this.userService.registerUser(sendData).subscribe((result: any) => {
        console.log('Signed Up Is Successfull',result);
      })
    }
  }

}
