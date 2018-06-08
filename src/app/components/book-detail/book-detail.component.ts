import { IBook } from './../../interface/IBook.class';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book : IBook;
  constructor(
    private bookService : BookService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res : Params)=>{
      this.bookService.getById(res.id).subscribe(data => this.book = data.json());
    });
  }

}
