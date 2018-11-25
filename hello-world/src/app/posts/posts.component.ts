import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: Http) {
  }
  
  // READ
  ngOnInit() {
    // DON'T CALL HTTP SERVICES ON THE CONSTRUCTOR OF THE COMPONENT FOR INITIALIZATION
    this.http.get(this.url)
    .subscribe( response => {
      this.posts = response.json();
    });
  }
  // CREATE
  createPost(input: HTMLInputElement){
    let text = {title: input.value};
    input.value = '';
    // THE METHODS OF HTTP CLASS RETURN AN OBSERVABLE, WHICH MEANS IT NEED A SUBSCRIBE METHOD
    this.http.post(this.url, JSON.stringify(text))
      .subscribe(response => {
       text['id'] = response.json().id;
        // SPLICE - TO ADD IT AT THE BEGINNING OF THE LIST, INSTEAD USING THE PUSH TO ADD IT TO THE END
        this.posts.splice(0, 0, text);
      });
  }
  // UPDATE
  updatePost(post){
    //USING THE PATCH METHOD TO UPDATE ONLY A FEW PROPERTIES IN AN OBJECT INSTEAD OF SENDING THE COMPLETE OBJECT TO THE SERVER WITH PUT
    // this.http.put(this.url, JSON.stringify(post))
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response.json());
      })
  }
  // DELETE
  deletePost(post){
    //BY CONVENTION THE HTTP.DELETE REQUEST DON'T HAVE A BODY
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        // let index = response.json().id;
        this.posts.splice(index, 1);
      });
  }
}
