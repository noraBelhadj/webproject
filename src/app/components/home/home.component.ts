import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'webProject-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameApplication:string;
  public  isSpecial : boolean;
  constructor() { }

  ngOnInit() {
    this.nameApplication = 'Home page';
    this.isSpecial= true;
  }
}


export class User {
	constructor(
        public id: number,
        public nom: string,
        public email: string,
        public password: string,
        public phone?: string
		){}
}