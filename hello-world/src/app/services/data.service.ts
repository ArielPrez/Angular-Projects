import { BadInput } from './../common/bad-input';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error'; 
import { throwError } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';


@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
        .pipe(
          map(res => {
            return res.json();
          }),
          catchError((error: Response) => {
            return this.handleError(error);
          })
        );
  }
  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          return this.handleError(error);
        })
      );
  }
  update(resource){
    return this.http.patch(this.url+resource.id, JSON.stringify({isRead: true}))
    .pipe(
      map(res => {
        return res.json();
      }),
      catchError((error: Response) => {
        return this.handleError(error);
      })
    );
  }  
  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        map(res => {
          return res.json();
        }),
        catchError((error: Response) => {
          return this.handleError(error);
        })
      )
    }
    private handleError(error: Response){
      if(error.status === 400)
        return throwError(new BadInput(error));
      if(error.status === 404)
        return throwError(new NotFoundError());
      return throwError(new AppError(error));
    }
}
