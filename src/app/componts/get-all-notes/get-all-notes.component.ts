import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/Service/NotesService/notes-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  AllNotesData:any;

  ngOnInit(): void {
    this.getAllNotes();
  }
  constructor(
    private snackBar: MatSnackBar,
    private notesService: NotesServiceService
  ){

  }

  getAllNotes(){
    this.notesService.getAllNotes().subscribe((result:any) =>{
      // console.log(result.data.data);
      this.AllNotesData = result.data.data
      console.log(this.AllNotesData);
      
    })
  }
}
