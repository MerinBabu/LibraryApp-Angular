import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  constructor(public _auth:AuthService,public authorService:AuthorService, private _router:Router) { }

  ngOnInit(): void {

    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }

  deleteAuthor(id){
    this.authorService.deleteAuthor(id)
    .subscribe((data)=> {
      console.log(data);
      alert('Author deleted successfully');
      this._router.navigate(['home']);
    });
  }

}
