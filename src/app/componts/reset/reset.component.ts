import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {

  constructor(private route: Router) { }

  forgotPassword() {
    this.route.navigateByUrl('/forgot-password')
  }

}
