import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';


@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {

  @Output() createNoteRefreshEvent = new EventEmitter<any>();

  hidden:boolean = false;
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
    console.log(this.hidden);
    
    this.hidden = !this.hidden;
    console.log(this.hidden);
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
      
      this.createNoteRefreshEvent.emit(result);
    });

    this.notes.reset();
    this.hidden = !this.hidden;
  }
}
