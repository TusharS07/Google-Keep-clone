import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivNotesComponent } from './archiv-notes.component';

describe('ArchivNotesComponent', () => {
  let component: ArchivNotesComponent;
  let fixture: ComponentFixture<ArchivNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
