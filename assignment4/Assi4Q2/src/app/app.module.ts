import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudInfoComponent } from './stud-info/stud-info.component';
import {StudListService} from './stud-list.service'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    StudInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
