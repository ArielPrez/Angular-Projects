import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  
  
  constructor(private service: PostService) {
  }

  // READ
  ngOnInit() {
    // DON'T CALL HTTP SERVICES ON THE CONSTRUCTOR OF THE COMPONENT FOR INITIALIZATION
    this.service.getPosts()
      .subscribe( 
        response => {
          this.posts = response.json();
        }, 
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }
  // CREATE
  createPost(input: HTMLInputElement){
    let text = {title: input.value};
    input.value = '';
    // THE METHODS OF HTTP CLASS RETURN AN OBSERVABLE, WHICH MEANS IT NEED A SUBSCRIBE METHOD
    this.service.createPosts(text)
      .subscribe(
        response => {
          text['id'] = response.json().id;
          // SPLICE - TO ADD IT AT THE BEGINNING OF THE LIST, INSTEAD USING THE PUSH TO ADD IT TO THE END
          this.posts.splice(0, 0, text);
        }, 
        (error: Response) => {
          if(error.status === 400){
            // ERROR OBJECT THAT COME FROM THE SERVER, THIS OBJECT POTENCIALY HAS MANY KEY VALUE PAIRS, THAT REPRESENT THE FIELD IN THE FORM AND THE VALUE ARE THE ERRORS FOR THOSE FIELDS.
            // this.form.setErrors(error.json());
            
          }
          else{
          // OTHERWISE DISPLAY THE GENERIC ERROR MESSAGE AND LOG THE ERROR ON THE SERVER.
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
  }
  // UPDATE
  updatePost(post){
    //USING THE PATCH METHOD TO UPDATE ONLY A FEW PROPERTIES IN AN OBJECT INSTEAD OF SENDING THE COMPLETE OBJECT TO THE SERVER WITH PUT
    // this.http.put(this.url, JSON.stringify(post))
    this.service.updatePosts(post)
      .subscribe(
        response => {
          console.log(response.json());
        }, error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }
  // DELETE
  deletePost(post){
    //BY CONVENTION THE HTTP.DELETE REQUEST DON'T HAVE A BODY
    this.service.deletePosts(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          // let index = response.json().id;
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if(error.status === 404)
            alert('This post has already been deleted.')
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
  }
}
