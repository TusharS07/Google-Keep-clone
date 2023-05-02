import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';
import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {

  isHidden = false;
  notes! : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private notesService: NotesServiceService
    ){}

  ngOnInit(): void {
    this.notes = this.formBuilder.group({
      title: [''],
      note: ['']
    })
  }

  

  hideDiv() {
    this.isHidden = !this.isHidden;
  }

  createNote(){
    let sendData = {
      title: this.notes.value.title,
      description: this.notes.value.note
    }

    this.notesService.createNote(sendData).subscribe((result:any) =>{
      console.log(result);

      this.snackBar.open(result.status.message, '', {
        duration: 4000
      });
    });

    this.notes.reset();
    this.isHidden = !this.isHidden;
  }
}
