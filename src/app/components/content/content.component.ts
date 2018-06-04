import { Component, OnInit } from '@angular/core';
import { IBook } from '../../interface/IBook.class';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  isViewList:boolean = false;
  keyword:String = '';
  books:IBook[] = [];
  constructor(private booksService : BookService) { }

  ngOnInit() {
    this.booksService.books.subscribe(data=>{
      this.books = data;
    });
    this.booksService.getBooks();
  }
  changeOption(change:boolean){
    this.isViewList = change;
  }
  searchBook(keyword: string){
    this.booksService.searchBooks(keyword);
  }
}
