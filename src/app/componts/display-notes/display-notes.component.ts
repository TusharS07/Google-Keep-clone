import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Output() updateNoteRefreshEvent = new EventEmitter<any>();
  @Input() AllNotesData:any


  ngOnInit(): void {
    
  }
  constructor(public dialog: MatDialog) {}

  openDialog(Note:any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      data: Note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.updateNoteRefreshEvent.emit(result);
    });
  }

}
