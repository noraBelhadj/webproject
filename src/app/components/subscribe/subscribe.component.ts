import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  userForm : FormGroup;
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
  	//this.nom = new FormControl('', [Validators.required, Validators.minLength(4)]);
  	//this.prenom = new FormControl('', [Validators.required]);
  	//this.pays = new FormControl('', [Validators.required]);
  	//this.dateDeNaissance = new FormControl('', [Validators.required]);
    
  //  this.infosForm = new FormGroup({
  //      dateDeNaissance: this.dateDeNaissance,
  //  	pays: this.pays}
  //  )

    this.userForm = new FormGroup({
    	//nom: this.nom,
    	email: new FormControl('',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
    	password: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    	infosPersonnel: new FormGroup({
         nom: new FormControl('',[Validators.required, Validators.minLength(5)]),
         prenom: new FormControl('', [Validators.required]),
         dateDeNaissance: new FormControl('',[Validators.required])
    	}),
    	Adresse: new FormGroup({
    	  pays: new FormControl(),
    	  rue: new FormControl(),
    	  codePostale: new FormControl()
    	})
    	
    });
  }

   onSubmit() {
    const values = this.userForm.value;
    const keys = Object.keys(values);
    if (this.userForm.valid) {
      console.log(values);}
  }

}
