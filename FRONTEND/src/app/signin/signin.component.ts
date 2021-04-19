import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  User={email:'',
  password:''
};
  constructor(public _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){

    this._auth.loginUser(this.User)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token);
        this._router.navigate(['home']);
      }
    );
  
  }
}
