import { IBook } from './../../interface/IBook.class';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book:IBook;
  constructor() { }

  ngOnInit() {
  }

}
