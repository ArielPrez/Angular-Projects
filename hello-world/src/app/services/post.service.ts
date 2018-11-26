import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error'; 
import { Observable } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
// import 'rxjs/add/operator/catchError';


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
    return this.http.post(this.url, JSON.stringify(text));
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
