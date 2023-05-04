import { Component } from '@angular/core';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';

@Component({
  selector: 'app-archiv-notes',
  templateUrl: './archiv-notes.component.html',
  styleUrls: ['./archiv-notes.component.scss']
})
export class ArchivNotesComponent {
  allArchiveNotesData = []


  constructor(
    private notesService: NotesServiceService
  ){

  }
  ngOnInit(): void {
    this.showTrashNotesList();
  }


  showTrashNotesList(){
 this.notesService.getArchivNotesList().subscribe((result:any) =>{
      // console.log(result.data.data);
      this.allArchiveNotesData = result.data.data.reverse();
      console.log(this.allArchiveNotesData);
      
      
    })
  }
}
