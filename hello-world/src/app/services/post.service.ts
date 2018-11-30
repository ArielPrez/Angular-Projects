import { BadInput } from './../common/bad-input';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error'; 
import { Observable } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs';

// import 'rxjs/add/operator/catchError';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
  }
  createPosts(text){
    return this.http.post(this.url, JSON.stringify(text)).pipe(
    catchError(response => {
      const err = response.json();
      return err.catch((error: Response) => {
        if(error.status === 400){
          // INCLUDE THE ERROR OBJECT THAT CAME FROM THE SERVER, 
          // THAT ERROR OBJECT INCLUDE DATA ABOUT INVALID FIELD
          return Observable.throw(new BadInput(error.json()));
        }
        return Observable.throw(new AppError(error.json()));
      });
    }));
  }
  updatePosts(post){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
  }
  deletePosts(id){
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(response => {
        const err = response.json();
        return err.catch((error: Response) => {
          if(error.status === 404)
            return Observable.throw(new NotFoundError());
          return Observable.throw(new AppError(error));
        });
      })
    )
    // .delete(this.url + '/' + id)
    //   .catchError((error: Response) => {
    //     return Observable.throw(new AppError(error));
    //   });
  }
}
