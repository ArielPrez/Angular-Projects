import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { 
    http.get(this.url)
    .subscribe( response => {
      this.posts = response.json();
    });

  }

  ngOnInit() {
  }

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

}
