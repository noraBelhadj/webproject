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

  greeter<T> (gret:T):T {
    return gret;
  }

  ngOnInit() {
    let test : Array<string | number> = [];
    let test2 : Array<object> = [];
    this.greeter('test');
    this.greeter(1);
    this.greeter(User);
    test.push(1);
    test.push('eest');
    test.push(User);
    test2.push(User);
    this.nameApplication = 'Home page';
    this.isSpecial= true;

  }
}


export class User {
   _name ='animale';
	constructor(
        public id: number,
        public nom: string,
        public email: string,
        public password: string,
        public phone?: string
    ){}
    
}
class Test extends User {
  public getgenre() {
    return this._name;
  }
  
}