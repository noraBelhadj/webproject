import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/authentification.service';
import { Store } from "@ngrx/store";
//import { go } from "@ngrx/router-store";
//import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { Router,  ActivatedRoute, } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { getAuthStatus } from '../../reducers/auth/selectors';
import { Observable } from 'rxjs/Observable';
import { AuthenticateAction } from "../../actions/login/login.actions";

// reducers
import {
  getAuthenticationError,
  isAuthenticated,
  isAuthenticationLoading,
  StateApp
} from "../../app.reducers";
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'webProject-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email:     FormControl;
  password:  FormControl;
  loginSubs: Subscription;
  returnUrl: string;
  error: Observable<string>;
  loading: Observable<boolean>;
  private alive = true;

  constructor(
    private store: Store<StateApp>,
    private authService: AuthService,
    // private route: ActivatedRoute,
    private router: Router,
    private route: ActivatedRoute

    ) { }

  ngOnInit() { 
   this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

     // set error
     this.error = this.store.select(getAuthenticationError);

     // set loading
     this.loading = this.store.select(isAuthenticationLoading);
 
     // subscribe to success
     this.store.select(isAuthenticated)
     .takeWhile(() => this.alive)
     .filter(authenticated => authenticated)
       .subscribe(value => {
         console.log("isAuthenticated"+value);
         this.router.navigate([this.returnUrl]);
        // this.store.dispatch("/users/my-account");
       });
  }

  onSubmit() {
    const values = this.loginForm.value;
    const keys = Object.keys(values);
    if (this.loginForm.valid) {
      console.log(values);
       // set payload
    const payload = {
      email: values.email,
      password: values.password
    };

    // dispatch AuthenticationAction and pass in payload
    this.store.dispatch(new AuthenticateAction(payload));

    this.store.select(isAuthenticated)
       
       .subscribe(value => {
         console.log("isAuthenticated"+value);
        // this.router.navigate([this.returnUrl]);
        // this.store.dispatch("/users/my-account");
       });
    //this.store.select(getAuthenticationError).subscribe(value=> console.log(" error "+value));
     // this.router.navigate(['/home']);
     /* this.loginSubs = this.authService.login(values).subscribe(data => {
        const error = data.error;
        if (error) {
          keys.forEach(val => {
            this.pushError(val,error);
          })

        }
      })*/

  }
}

  initForm() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]);

   this.loginForm = new FormGroup({
       email: this.email,
       password: this.password
   });
  }

  private pushError(ctrl_name: string , msg:string) : void {
    this.loginForm.controls[ctrl_name].setErrors({'msg': msg});
  }

  
  redirectIfUserLoggedIn() {
    //this.router.navigate([this.returnUrl]); 
   /* this.store.select(getAuthStatus).subscribe(
      data => {
        if (data === true) { this.router.navigate([this.returnUrl]); }
      }
    );*/
  }
}
