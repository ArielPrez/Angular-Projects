import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFav: boolean;

  constructor() { }

  ngOnInit() {
  }
  
  onClick(){
    this.isFav = !this.isFav;
  }
}
