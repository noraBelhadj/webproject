import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs}  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import { getBootstrapListener } from '@angular/router/src/router_module';


@Injectable()
export class HttpCommonService {
  public loading = new Subject<{loading:Boolean, hasError: Boolean, hasMsg:string}>();
  
  constructor(private http: Http) { }

  get (url: string, options?: RequestOptionsArgs) : Observable<any> {
    return this.http.get(url,options).catch(this.onCatch.bind(this)).
    do((res:Response) => {this.onSubscribeSuccess(res);}, 
       (error: any)=> {this.onSubscribeError(error) }
      );
  }

  post (url: string,body: any,  options?: RequestOptionsArgs) : Observable<any> {
    return this.http.post(this.getfullUrl(url),body,options).catch(this.onCatch.bind(this)).
    do((res:Response) => {this.onSubscribeSuccess(res);}, 
       (error: any)=> {this.onSubscribeError(error) }
      );
  }

  private getfullUrl(url:string) : string {
     return "Evirement.api_end_point" + url;
  }
  
  private onCatch(error:any, caught: Observable<any>) : Observable<any> {
      console.log("une erreur s'est produite", error)
      return Observable.of(error);
  }

  private onSubscribeSuccess(res:Response) : void {
      this.loading.next({loading: true, hasError:false, hasMsg:''})
  }

  private onSubscribeError(res: Response) : void {
      this.loading.next({loading:false, hasError:true, hasMsg:''})
  }
}