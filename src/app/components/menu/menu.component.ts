import { IBook } from './../../interface/IBook.class';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  keyword: string ='';
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  searchBook(keyword: string){
    this.bookService.searchBooks(keyword);
  }
}
