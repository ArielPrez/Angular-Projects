import { BadInput } from './../common/bad-input';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error'; 
import { throwError } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url)
        .pipe(
          map(res => {
            return res;
          }),
          catchError((err: Response) => {
            return throwError('error in source. Details: ' + err);
          })
        );
  }
  createPosts(text){
    return this.http.post(this.url, JSON.stringify(text))
      .pipe(
        catchError((err: Response) => {
          if(err.status === 400){
            return throwError(new BadInput(err.json()));
          }
          return throwError(new AppError(err.json()));
        })
      );
  }
  updatePosts(post){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
    .pipe(
      map(res => {
        return res;
      }),
      catchError((err: Response) => {
        return throwError('error in source. Details: ' + err);
      })
    );
  }  
  deletePost(id) {
    return this.http.delete(this.url + '/' + id.id)
      .pipe(
        map(res => {
          return res;
        }),
        catchError((error: Response) => {
          if (error.status === 404)
            return throwError(new NotFoundError()); 
          else
            return throwError(new AppError(error));
        })
      )
    }
}
