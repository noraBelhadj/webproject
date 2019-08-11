import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { timer } from 'rxjs/observable/timer';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {




  constructor() { }

  ngOnInit() {
  	const ARR = [1,2,3];

  	ARR.length =2;
  	console.log(ARR);
    //alert(ARR);
  	const personne = { name:"george", age:23};
  	personne.name="name";
  //	console.log(personne.name);
//alert(personne.name);
  	let pers = Object.freeze({name: "george", age:23});
    //pers.name = "oe";
  ///	console.log(pers.name);

  	let x = 3+".05";
  	//alert(x);

  	var a,b,c;
  	[a,b=2,c] = [1,2,{id:0}];

  //	alert(c.id);

  //  var o = new obj() //error


  	var task1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'one');
    });

    var task2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000, 'two');
    });

  Promise.race([task1, task2]).then(function(value) {
 // console.log(value); // "one"
  // Both resolve, but task1 resolves faster
   });
  //Promise.rej

  const p = new Promise((resolve, reject) => { console.log("starting...");

  //alert("starting...")

  });
  }

}


 class Circle {
 	
 	

 	static area(r){


		return (r*r*Math.PI);
	} 

 }
	
	let c = new Circle();
 

	Circle.area(5);
	//c.area(5);
  //c.constructor.area(5);

  
  

const observable = new Observable(subscriber=>{
   subscriber.next(1);
   subscriber.next('ghghg');
   subscriber.next(3);

   setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
 

});
console.log('juste avant subscribe');

observable.subscribe({
next(x) { console.log('got value '+ x)},
error(err){ console.log('error')},
complete(){ console.log('done')}

});

console.log('juste apre subscribe');
const test ="";

const source = timer(1000);
const subscribe = source.subscribe(val=> console.log(val));

let isResolved = true;

let myPromise = new Promise((resolve, reject) => {
    if (isResolved) {
        resolve((x)=> console.log('sddsdsdsdsdsdsdsd'));
       
    }
    else {
        let error = new Error("J'ai pas envie que ça marche");
        ("Super ça marche");
        reject(error);
    }
});