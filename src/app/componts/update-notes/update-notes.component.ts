import { Component, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent {


  height: any;
  note: any;
  title: any;
  noteId: any;
  color: any;

  constructor(
    private notesService: NotesServiceService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.title = data.title
    this.note = data.description
    this.noteId = data.id
    this.color = data.color

  }


  onInput() {
    this.height = this.note.length > 0 ? this.note.length * 20 : 20;
  }

  autoResize(element: any) {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  }

  updateNote(): void {
    let updatedData = {
      noteId: this.noteId,
      title: this.title,
      description: this.note
    }
    this.notesService.updateNotes(updatedData).subscribe((result) => {
      console.log(result);

      this.dialogRef.close();
    })

  }
}
function Output(): (target: UpdateNotesComponent, propertyKey: "createNoteRefreshEvent") => void {
  throw new Error('Function not implemented.');
}

