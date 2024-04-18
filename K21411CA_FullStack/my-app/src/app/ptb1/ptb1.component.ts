import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb1',
  templateUrl: './ptb1.component.html',
  styleUrls: ['./ptb1.component.css']
})
export class Ptb1Component {
  public hesoA:string=""
  public hesoB:string=""
  public ketQua:string=""
  giaiPhuongTrinh()
  {
    let a=parseFloat(this.hesoA)
    let b=parseFloat(this.hesoB)
    if (a==0 && b==0)
    {
      this.ketQua="tùm lum nghiệm"
    }
    else if(a==0 && b!=0)
    {
      this.ketQua="Ko có nghiệm gì hết"
    }
    else
    {
      this.ketQua="x="+(-b/a)
    }
  }
}
