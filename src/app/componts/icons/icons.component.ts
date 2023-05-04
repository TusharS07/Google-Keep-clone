import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  @Output() refreshTrashAndArchiveNodeTodisplay = new EventEmitter<any>();
  @Input() notesData:any

  constructor(
    private snackBar: MatSnackBar,
    private notesService: NotesServiceService
  ){}

  moveToTrash(){
    // console.log(this.notesData);
    
    let sendDat= {
      noteIdList: [this.notesData.id],
      isDeleted: true
    }
    this.notesService.trashMoveNotes(sendDat).subscribe((result:any) => {
      console.log(result);
      this.refreshTrashAndArchiveNodeTodisplay.emit(result);
      this.snackBar.open('note moved into trash', '', {
        duration: 4000
      });

    })
  }

  moveToArchive(){
    let sendDat= {
      noteIdList: [this.notesData.id],
      isArchived: true
    }
    this.notesService.archiveMoveNotes(sendDat).subscribe((result:any) => {
      console.log(result);
      this.refreshTrashAndArchiveNodeTodisplay.emit(result);
      this.snackBar.open('note moved into archive', '', {
        duration: 4000
      });
    })
  }
}
