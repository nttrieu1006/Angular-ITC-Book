import { IBook } from './../interface/IBook.class';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';

@Injectable()
export class BookService {

  private api: string = 'http://localhost:3000/books';
  private _books: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);
  get books() {
    return this._books.asObservable();
  }
  constructor(private http: Http) { }

  getBookFromServer() {
    this.http.get(this.api).subscribe(data => {
      let books = data.json();
      this._books.next(books);
    })
  }
  getBooks(){
    this.getBookFromServer();
  }
  // searchBooks(keyword : string){
  //   let books = this._books.getValue().filter(x=>x.name.includes(keyword));
  //   this._books.next(books);
  // }
}
