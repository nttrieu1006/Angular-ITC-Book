import { IBook } from './../interface/IBook.class';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import * as uuid from 'uuid';
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
  getById(id: string){
    return this.http.get(this.api+ `/${id}`);
  }
  searchBooks(keyword : string){
    let result = this._books;
    // let books = result.getValue().filter(x=>x.name.toLowerCase().includes(keyword.toLowerCase()));
    // this._books.next(books);
    return result.getValue().filter(x=>x.name.toLowerCase().includes(keyword.toLowerCase()));
  }
  addBook(book : IBook){
    book.id = uuid.v4();
    this.http.post(this.api,book).subscribe(data=>{
      this._books.getValue().push(book);
      this._books.next(this._books.getValue());
    });
  }
}
