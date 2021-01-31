import { Book } from './book';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  constructor(private http: HttpClient) { }

  getPurchasesBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4000/api/books/purchase')
  }
 
  purchasesBookById(bookId: string) {
    return this.http.post('http://localhost:4000/api/books/purchase', {bookId})
  }

  getAllBooks(): Observable<any> {
    return this.http.get('http://localhost:4000/api/books')
  }

  createBook(model: Book) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post('http://localhost:4000/api/books/create', model);
  }

  getBook(bookId: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4000/api/books/${bookId}`);
  }

  editBook(model: Book): Observable<Book> {
    return this.http.patch<Book>('http://localhost:4000/api/books' , model);
  }

  deleteBook(bookId: any) {
    return this.http.delete(`http://localhost:4000/api/books/${bookId}`, { responseType: 'text' });
  }
}
