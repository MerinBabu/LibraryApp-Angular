import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AuthGuard} from './auth.guard';
import { UpdateAuthorComponent } from './update-author/update-author.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'books',component:BooksComponent},
  {path:'add-author',
  canActivate:[AuthGuard],
  component:AddAuthorComponent},
  {path:'add-book',
  canActivate:[AuthGuard],
  component:AddBookComponent},
  {path:'update-book/:id',
  canActivate:[AuthGuard],
   component:UpdateBookComponent
  },
  {path:'update-author/:id',
  canActivate:[AuthGuard],
   component:UpdateAuthorComponent
  }

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
