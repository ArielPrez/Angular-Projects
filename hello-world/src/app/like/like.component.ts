import { Component, OnInit, Input } from '@angular/core';
import { AuthorsService } from './../services/authors.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  authorsLikes;
  constructor(service: AuthorsService) {
    this.authorsLikes = service.getAuthors();
  }
  

  onClick(){
    this.likesCount = (this.isActive) ? this.authorsLikes[0].likes : this.authorsLikes[0].likes + 1;  //+= ((this.isActive) ? -1 : 1);
    this.isActive = !this.isActive;
    // if(this.tweet.isLiked)
    //   this.tweet.likesCount++;
    // else
    //   this.tweet.likesCount--;
  }

}
