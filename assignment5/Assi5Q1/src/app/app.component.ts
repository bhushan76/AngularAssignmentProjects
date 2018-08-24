import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assi5Q1';

genders='';
  fill(name,address,gender,mobile,college,email,batch)
  {
console.log("name="+name.value+"\n"+"address="+address.value);
console.log("mobile="+mobile.value)
console.log("college="+college.value)
console.log("Email="+email.value)
console.log("batch="+batch.value)
console.log("gender="+this.genders);
  }





}
