import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup, FormControl, FormBuilder, Validators,Form} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  updatedAuthor: any = {};
  constructor(private fb:FormBuilder,public _auth:AuthService,private route: ActivatedRoute, private _router:Router, private authorService:AuthorService) { }
  updateAuthor(authorName,bestbookName,  genre,image){
    this.route.params.subscribe(params =>{
      this.authorService.updateAuthor(authorName,bestbookName,  genre,image, params.id);
      alert('author updated successfully');
      this._router.navigate(['authors']);
    });
  }
  ngOnInit(): void {
  }

}
