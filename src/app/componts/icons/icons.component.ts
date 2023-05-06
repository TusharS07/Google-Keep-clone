import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Output() refreshTrashAndArchiveNodeTodisplay = new EventEmitter<any>();
  @Input() notesData: any

  show:boolean = true;


  colorsArray:Array<any> = [
    {
      colorName: "Red",
      colorCode: "#f28b82"
    },
    {
      colorName: "Orange",
      colorCode: "#fbbc04"
    },
    {
      colorName: "Yellow",
      colorCode: "#fff475"
    },
    {
      colorName: "Green",
      colorCode: "#ccff90"
    },
    {
      colorName: "Teal",
      colorCode: "#a7ffeb"
    },
    {
      colorName: "Blue",
      colorCode: "#cbf0f8"
    },
    {
      colorName: "Dark Blue",
      colorCode: "#aecbfa"
    },
    {
      colorName: "Purple",
      colorCode: "#d7aefb"
    },
    {
      colorName: "Pink",
      colorCode: "#fdcfe8"
    },
    {
      colorName: "Brown",
      colorCode: "#e6c9a8"
    },
    {
      colorName: "Grey",
      colorCode: "#e8eaed"
    }
  ]

  constructor(
    private snackBar: MatSnackBar,
    private notesService: NotesServiceService
  ) { }

  ngOnInit(): void {
   if (this.notesData.isDeleted === true) {
    this.show = false;
   }else{
    this.show = true;
   }
  }

  moveToTrash() {
    // console.log(this.notesData);

    let sendDat = {
      noteIdList: [this.notesData.id],
      isDeleted: true
    }
    this.notesService.trashMoveNotes(sendDat).subscribe((result: any) => {
      console.log(result);
      this.refreshTrashAndArchiveNodeTodisplay.emit(result);
      this.snackBar.open('note moved into trash', '', {
        duration: 4000
      });

    })
  }

  moveToArchive() {
    let sendDat = {
      noteIdList: [this.notesData.id],
      isArchived: true
    }
    this.notesService.archiveMoveNotes(sendDat).subscribe((result: any) => {
      console.log(result);
      this.refreshTrashAndArchiveNodeTodisplay.emit(result);
      this.snackBar.open('note moved into archive', '', {
        duration: 4000
      });
    })
  }


  deleteForeverNotes(){
    let sendDat = {
      noteIdList: [this.notesData.id]
    }
    this.notesService.deleteForeverNotes(sendDat).subscribe((result: any) => {
      console.log(result);
      this.refreshTrashAndArchiveNodeTodisplay.emit(result);
      this.snackBar.open('note deleted', '', {
        duration: 4000
      });

    })
  }

  changesColorNotes(color:any){
    let sendDat = {
      noteIdList: [this.notesData.id],
      color: color
    }
    this.notesService.changesColorNotes(sendDat).subscribe((result: any) => {
      console.log(result);
      this.refreshTrashAndArchiveNodeTodisplay.emit(result);
    })
  }
}
