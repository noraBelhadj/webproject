import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  subscribeForm : FormGroup;
  infosForm     : FormGroup;
  nom            :FormControl;
  dateDeNaissance: FormControl;
  pays           : FormControl;
  prenom         :FormControl
  email         : FormControl;
  password      : FormControl;
  
  constructor() { }

  ngOnInit() {
  this.initForm();
  }

  initForm() {
  	this.email = new FormControl('',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]);
  	this.nom = new FormControl('', [Validators.required, Validators.minLength(4)]);
  	this.prenom = new FormControl('', [Validators.required]);
  	this.pays = new FormControl('', [Validators.required]);
  	this.dateDeNaissance = new FormControl('', [Validators.required]);
    this.subscribeForm = new FormGroup({
    	nom: this.nom,
    	email: this.email,
    	password: this.password}
    	);
    this.infosForm = new FormGroup({
        dateDeNaissance: this.dateDeNaissance,
    	pays: this.pays}
    )
  }

}
