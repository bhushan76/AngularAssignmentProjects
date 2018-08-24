import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{statictext}}</h1>
  
  <input type="text" [class]="bglcolor" value="this is textbox">`,
  styles: ['.bgkcolor{color:lawngreen;background-color: blue; }']
})
export class AppComponent {
  
  statictext="this is static field ";
  bglcolor='bgkcolor';
}
