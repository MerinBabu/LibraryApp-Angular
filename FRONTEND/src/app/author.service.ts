import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(public http:HttpClient) { }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  newAuthor(item){
    return this.http.post("http://localhost:3000/addauthor",{"author":item});
  }
  updateAuthor(authorName,bestbookName,  genre,image, id){
    const updatedAuthor = {
      authorName,bestbookName,  genre,image
    };
    return this.http.post(`http://localhost:3000/updateauthor/${id}`, updatedAuthor)
    .subscribe((data)=> {console.log(data)});
  }
  deleteAuthor(id){
    return this.http.delete(`http://localhost:3000/deleteauthor/${id}`);
  }
}
