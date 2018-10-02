import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFav: boolean;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isFav = !this.isFav;
  }
}
