import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ButClick:string="";

  Bclick()
  {

this.ButClick="Button clicked";

  }
}
