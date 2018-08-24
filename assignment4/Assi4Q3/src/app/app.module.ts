import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BooknameComponent } from './bookname/bookname.component';
import { BookpriseComponent } from './bookprise/bookprise.component';
import { BooksLibService } from './books-lib.service';
BooksLibService
@NgModule({
  declarations: [
    AppComponent,
    BookdetailComponent,
    BooknameComponent,
    BookpriseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooksLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
