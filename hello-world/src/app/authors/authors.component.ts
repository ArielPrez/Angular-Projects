import { LikeChangedEventArgs } from './../like/like.component';
import { AuthorsService } from './../services/authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  isFav: boolean;
  tweet = {
    body: '',
    isLiked: false,
    likesCount: 4
  }  

  constructor(private service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

  // METHOD THAT CALL THE 'AUTHORS.SERVICE' TO UPDATE THE AMOUNT OF LIKES,
  //     USING AN 'EVENT EMITTER' WITH AN OUTPUT PROPERTY OF THE 'LIKE COMPONENT'
  setAuthorLikes(eventArgs: LikeChangedEventArgs, a){
    // debugger;
    // console.log("Fav changed! ", eventArgs.newLike);
    for(let i=0; i < this.authors.length ;i++){
      if(this.authors[i].firstName === a) {
        this.service.setAuthors(i,eventArgs.newLike);
      }
    }
  }

}
