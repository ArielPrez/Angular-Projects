import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
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
    this.service.getAll()
      .subscribe( 
        response => {
          this.posts = response;
        }
      );
  }
  // CREATE
  createPost(input: HTMLInputElement){
    let text = {title: input.value};
    input.value = '';
    // THE METHODS OF HTTP CLASS RETURN AN OBSERVABLE, WHICH MEANS IT NEED A SUBSCRIBE METHOD
    this.service.create(text)
      .subscribe(
        response => {
          text['id'] = response.id;
          // SPLICE - TO ADD IT AT THE BEGINNING OF THE LIST, INSTEAD USING THE PUSH TO ADD IT TO THE END
          this.posts.splice(0, 0, text);
        }, 
        (error: AppError) => {
          if(error instanceof BadInput){
            // ERROR OBJECT THAT COME FROM THE SERVER, THIS OBJECT POTENCIALY HAS MANY KEY VALUE PAIRS,
            // THAT REPRESENT THE FIELD IN THE FORM AND THE VALUE ARE THE ERRORS FOR THOSE FIELDS.
            // this.form.setErrors(error.json());
            // this.form.setErrors(error.originalError);
          }
          else throw error
          // OTHERWISE DISPLAY THE GENERIC ERROR MESSAGE AND LOG THE ERROR ON THE SERVER.
        });
  }
  // UPDATE
  updatePost(post){
    //USING THE PATCH METHOD TO UPDATE ONLY A FEW PROPERTIES IN AN OBJECT 
    //INSTEAD OF SENDING THE COMPLETE OBJECT TO THE SERVER WITH PUT
    // this.http.put(this.url, JSON.stringify(post))
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        }
        ,
        (error: AppError) => {
          if(error instanceof NotFoundError)
            alert('This post has already been deleted.')
          else throw error;
            //GLOBAL ERROR HANDLER
        }
      );
  }
  // DELETE
  deletePost(post){
    //BY CONVENTION THE HTTP.DELETE REQUEST DON'T HAVE A BODY
    
    this.service.delete(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          // let index = response.json().id;
          post = this.posts.splice(index, 1);
          console.log('This is a testing =====> ' + response.json());
        }
        ,
        (error: AppError) => {
          if(error instanceof NotFoundError)
            alert('This post has already been deleted.')
          else throw error;
            //GLOBAL ERROR HANDLER
        }
      );
  }
  // deletePost(id) {
  //   return this.http.delete(this.url + '/' + id).pipe (
  //   catchError((error: Response) => {
  //   if (error.status === 404) {
  //   return throwError(new NotFoundError());
  //   } else {
  //   return throwError(new AppError(error));
  //   }
  //   }))}
}
