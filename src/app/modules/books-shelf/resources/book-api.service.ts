import { Book } from './book';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  authToken: any;

  constructor(
    private http: HttpClient
  ) { }

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

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
