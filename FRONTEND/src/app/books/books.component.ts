import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import {BookModel} from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books;
  constructor(public _auth:AuthService,public bookService:BookService,private _router:Router) { }

  deleteBook(id){
    this.bookService.deleteBook(id)
    .subscribe((data)=> {
      console.log(data);
      alert('Book deleted successfully');
      this._router.navigate(['home']);
    });
  }
  ngOnInit(): void {

    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }

}
