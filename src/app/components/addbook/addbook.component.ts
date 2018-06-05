import { IBook } from './../../interface/IBook.class';
import { BookService } from './../../services/book.service';
import { ContentComponent } from './../content/content.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
  book : IBook = {
    name: '',
    cover: '',
    link: ''
  };
  constructor( 
    public dialogRef: MatDialogRef<AddbookComponent>,
    private bookService: BookService
  ) { }

  ngOnInit() {
  }
  
  addBook(book : IBook){
    this.bookService.addBook(book);
    this.dialogRef.close();
  }
}
