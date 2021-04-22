import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormGroup, FormControl, FormBuilder, Validators,Form} from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  addAuthorForm:FormGroup=new FormGroup({
    authorName: new FormControl(''),
    bestbookName: new FormControl(''),
    
    genre: new FormControl(''),

    image: new FormControl(''),
  });
  newAuthor = {authorName:'',bestbookName:'',genre:'',image:''};
  constructor(private fb:FormBuilder,public _auth:AuthService, private _router:Router, private authorService:AuthorService) { }

  ngOnInit(): void {

    this.addAuthorForm=this.fb.group(
      { authorName: ['',Validators.required],
        bestbookName: ['',Validators.required],
      
      genre: ['',Validators.required],
      image: ['',Validators.required]
        
    }
    );
    
    console.log(this.newAuthor);
  }

  addAuthor(){
    this.authorService.newAuthor(this.newAuthor)
    .subscribe(
      res=>{
        console.log(res);
        this._router.navigate(['authors'])
      },
      err=>console.log(err)
    )
  }

}
