import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OSComponent } from './os/os.component';
import { LanguageComponent } from './language/language.component';
import { DatabaseComponent } from './database/database.component';


const routes: Routes = [
{path:"operatingSystem" ,component:OSComponent},
{path:"Language" ,component:LanguageComponent},
{path:"database" ,component:DatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
