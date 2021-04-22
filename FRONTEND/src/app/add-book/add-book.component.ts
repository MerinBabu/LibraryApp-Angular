import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormGroup, FormControl, FormBuilder, Validators,Form} from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm:FormGroup=new FormGroup({
    bookName: new FormControl(''),
    authorName: new FormControl(''),
    genre: new FormControl(''),

    image: new FormControl(''),
  });
   
  newBook = {bookName:'',authorName:'',genre:'',image:''};
  constructor(private fb:FormBuilder,public _auth:AuthService, private _router:Router, private bookService:BookService) { }

  ngOnInit(): void {

    this.addBookForm=this.fb.group(
      { bookName: ['',Validators.required],
      authorName: ['',Validators.required],
      genre: ['',Validators.required],
      image: ['',Validators.required]
        
    }
    );
    
    console.log(this.newBook);
    
  }
  addBook(){
    this.bookService.newBook(this.newBook)
    .subscribe(
      res=>{
        console.log(res);
        this._router.navigate(['books'])
      },
      err=>console.log(err)
    )
  }

}
