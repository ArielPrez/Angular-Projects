import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

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
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
  }
  deletePosts(id){
    return this.http.delete(this.url + '/' + id) }
}
