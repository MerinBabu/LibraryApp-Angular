import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http:HttpClient) { }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }

  newBook(item){
    return this.http.post("http://localhost:3000/addbook",{"book":item});
  }

  updateBook(bookName, authorName, genre,image, id){
    const updatedBook = {
      bookName, authorName, genre,image
    };
    return this.http.post(`http://localhost:3000/updatebook/${id}`, updatedBook)
    .subscribe((data)=> {console.log(data)});
  }
  deleteBook(id){
    return this.http.delete(`http://localhost:3000/deletebook/${id}`);
  }
}
