import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userName:string="obama"
  public passWord:string="123"
  public redStyle="MyStyle1"
  public bigFontStyle="MyStyle2"
  public redBigFontStyle={
    "MyStyle1":true,
    "MyStyle2":true
  }
  processClick(userName:string,passWord:string){
    alert("user name="+userName+";password="+passWord)
  }
}
