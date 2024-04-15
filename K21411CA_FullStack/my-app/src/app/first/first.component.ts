import { Component } from '@angular/core';

@Component({
  selector: '[app-first]',
  standalone: true,
  imports: [],
  // templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {

  public framework: string = "Angular"

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    return "Sample text";
  }
}
