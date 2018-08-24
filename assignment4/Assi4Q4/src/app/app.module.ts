import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OSComponent } from './os/os.component';
import { LanguageComponent } from './language/language.component';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    OSComponent,
    LanguageComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
