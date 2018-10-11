import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';


@Injectable()
export class HttpService {
  public loading = new Subject<{loading: boolean, hasError: Boolean, hasMsg: string}>();
  constructor(private http: Http) { }

  request(url: string | Request, request, options?: RequestOptionsArgs ) : Observable<Response> {
  	return this.http.request(url, options);
  }

  get ( url: string , options?: RequestOptionsArgs): Observable<any> {
    this.requestInterceptor();
  	return this.http.get(url, options).catch(this.onCatch.bind(this))
     .do((res:Response) => { this.onSubscribeSuccess(res); } , (error: any)=> {
     	this.onSubscribeError(error);
     }
    ).finally(() => {
      //  this.onFinally();
      this.requestInterceptor();
      });
  }

  getLocal( url: string, options: RequestOptionsArgs) : Observable<any> {

  	return this.http.get(url, options);
  }


 post( url: string, body: any, options: RequestOptionsArgs) : Observable<any> {

 	return this.http.post(this.getFullUrl(url),body, this.requestOptions(options)).catch(this.onCatch.bind(this))
 	.do((res: Response) => {this.onSubscribeSuccess(res)}, (error: any) => {this.onSubscribeError(error)})
 	.finally(()=> { this.OnFinaly()});
 }

  private getFullUrl(url:string): string {
  	return environment.API_ENDOINT + url;
  }


put (url: string, body: any, options?: RequestOptionsArgs): Observable<any> {

  return this.http.put(this.getFullUrl(url),body, options)
  .catch(this.onCatch.bind(this))
  .do((res: Response) => {this.onSubscribeSuccess(res)}, (error:any) => {this.onSubscribeError(error)})
  .finally(()=>this.onFinally());
}


delete(url: string, options?: RequestOptionsArgs): Observable<any> {

  return this.http.delete(this.getFullUrl(url), this.requestOptions(options))
  .catch(this.onCatch.bind(this))
  .do((res:Response) => this.onSubscribeSuccess(res), (error: any) => this.onSubscribeSuccess(error))
  .finally(()=> this.OnFinaly());
}

  

  private requestInterceptor(): void {
  	console.log('sanding request');
  	this.loading.next({
        loading: true,
        hasError: false,
        hasMsg:''
  	});
  }

  private onSubscribeSuccess(res: Response) : void {
  	this.loading.next({
  		loading: false, hasError: false, hasMsg:''
  	});
  }


  private onSubscribeError(error: any) : any {
  	this.loading.next({loading: false, hasError: true, hasMsg:'Erreur' });
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    console.log('Something went terrible wrong and error is', error);
    // this.loaderService.popError();
    return Observable.of(error);
  }

  private responseInterceptor(): void {
   console.log('request complete');
  }

  private OnFinaly(): void {
  	this.responseInterceptor();
  }


  private requestOptions(options? : RequestOptionsArgs) : RequestOptionsArgs {
    if(options == null) {
       options =  new RequestOptions();
    }
    if(options.headers == null ){
    	const user = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : null;
    	options.headers = new Headers({
    		'Content-type': 'application/json',
    		'token': user
    	});
    }
  	return options;
  }

  private onFinally(): void {
    this.requestInterceptor();
  }
   

}
