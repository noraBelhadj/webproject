import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'webProject-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  nameApplication:string;
  constructor() { }

  ngOnInit() {
  	this.nameApplication = 'Home page';
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