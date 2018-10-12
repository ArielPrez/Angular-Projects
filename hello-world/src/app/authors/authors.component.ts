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

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    console.log(this.authors);
  }

  ngOnInit() {
  }

}
