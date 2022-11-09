import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users = [ 
    {
      firstName: 'Peter',
      age: 21
    },
    {
      firstName: 'Jose',
      age: 43
    },
    {
      firstName: 'Maria',
      age: 37
    }
  ]

  myProp = 'Hello World!'

  constructor() {
    setTimeout(() => {
      this.myProp = 'Hello to all worlds!'
    }, 2000);
   }

  ngOnInit(): void {
  }

  showAge = true;
  
  handleClickEvent() {
    this.showAge = !this.showAge;
  }

}
