import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup, FormControl, FormBuilder, Validators,Form} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  updatedBook: any = {};
  constructor(private fb:FormBuilder,public _auth:AuthService,private route: ActivatedRoute, private _router:Router, private bookService:BookService){}
  updateBook(bookName, authorName, genre,image){
    this.route.params.subscribe(params =>{
      this.bookService.updateBook(bookName, authorName, genre,image, params.id);
      alert('book updated successfully');
      this._router.navigate(['books']);
    });
  }

  ngOnInit(): void {

    
  }

}
