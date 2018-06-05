import { ContentComponent } from './../content/content.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddbookComponent>) { }

  ngOnInit() {
  }

}
