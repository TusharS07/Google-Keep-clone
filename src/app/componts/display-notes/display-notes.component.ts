import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { DataServiceService } from 'src/app/Service/DataService/data-service.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Output() updateNoteRefreshEvent = new EventEmitter<any>();
  @Input() AllNotesData: any

  searchText:any

  ngOnInit(): void {
    this.filterNotesAsPerSearch();
  }
  constructor(
    public dialog: MatDialog,
    private dataService: DataServiceService
    ) { }

    filterNotesAsPerSearch(){
      this.dataService.receiveSearchValue.subscribe((res) =>{
        this.searchText= res;
      })
    }

  openDialog(Note: any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      data: Note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.updateNoteRefreshEvent.emit(result);
    });
  }

  refreshNotesData() {
    this.updateNoteRefreshEvent.emit();     //for refresh for trash n archive
  }

}
