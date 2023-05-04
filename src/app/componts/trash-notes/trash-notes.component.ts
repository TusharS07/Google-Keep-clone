import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {

  allTrashNotesData = []


  constructor(
    private notesService: NotesServiceService
  ) {

  }
  ngOnInit(): void {
    this.showTrashNotesList();
  }


  showTrashNotesList() {
    this.notesService.getTrashNotesList().subscribe((result: any) => {
      // console.log(result.data.data);
      this.allTrashNotesData = result.data.data.reverse();
      console.log(this.allTrashNotesData);
    })
  }
}
