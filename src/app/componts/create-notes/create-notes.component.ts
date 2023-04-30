import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {

  isHidden = false;
  notes! : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar){}

  ngOnInit(): void {
    
  }

  

  hideDiv() {
    this.isHidden = !this.isHidden;
  }

  createNote(){
    this.isHidden = !this.isHidden;
  }
}
