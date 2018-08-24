import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assi3Q4';
thisstring:string="marvellous infosystems"

Slength:number = this.thisstring.length;

upper:string = this.thisstring.toUpperCase();

}
