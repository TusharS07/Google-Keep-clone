import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './componts/sign-up/sign-up.component';
import { LoginComponent } from './componts/login/login.component';
import { ForgotPasswordComponent } from './componts/forgot-password/forgot-password.component';
import { ResetComponent } from './componts/reset/reset.component';
import { DashbordComponent } from './componts/dashbord/dashbord.component';
import { AuthenticationGuard } from './authentication.guard';
import { GetAllNotesComponent } from './componts/get-all-notes/get-all-notes.component';
import { TrashNotesComponent } from './componts/trash-notes/trash-notes.component';
import { ArchivNotesComponent } from './componts/archiv-notes/archiv-notes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset', component: ResetComponent },

  { path: 'dashbord', component: DashbordComponent, canActivate: [AuthenticationGuard] ,
    children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
      { path: 'notes', component: GetAllNotesComponent },
      { path: 'trashNotes', component: TrashNotesComponent },
      { path: 'archiveNotes', component: ArchivNotesComponent }
    ]
  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
