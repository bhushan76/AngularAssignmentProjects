import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

name="";
hide:boolean = true;
pass='';
fun(name1,pass1)
{
this.name=name1;
this.pass=pass1;


}
}
