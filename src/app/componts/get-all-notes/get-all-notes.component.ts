import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  AllNotesData = []

  ngOnInit(): void {
    this.getAllNotes();
  }
  constructor(
    private snackBar: MatSnackBar,
    private notesService: NotesServiceService,
  ) {

  }

  refreshEvent($event: any) {
    this.getAllNotes()
  }
  getAllNotes() {
    this.notesService.getAllNotes().subscribe((result: any) => {
      // console.log(result.data.data);
      this.AllNotesData = result.data.data.reverse();
      console.log(this.AllNotesData);
      this.AllNotesData = this.AllNotesData.filter((notes: any) => {
        return notes.isDeleted === false && notes.isArchived === false
      })

    })
  }
}
