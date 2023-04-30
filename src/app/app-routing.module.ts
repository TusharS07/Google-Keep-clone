import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './componts/sign-up/sign-up.component';
import { LoginComponent } from './componts/login/login.component';
import { ForgotPasswordComponent } from './componts/forgot-password/forgot-password.component';
import { ResetComponent } from './componts/reset/reset.component';
import { DashbordComponent } from './componts/dashbord/dashbord.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateNotesComponent } from './componts/create-notes/create-notes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset', component: ResetComponent },

  { path: 'dashbord', component: DashbordComponent, canActivate: [AuthenticationGuard] },

  { path: 'create_notes', component: CreateNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
