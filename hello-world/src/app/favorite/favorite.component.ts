import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is_Fav') isUp: boolean;
  @Input('is_Fav') isDown: boolean;
  @Output('change') thumbEvnt = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  onClick(thumb){
    if(thumb === 'up'){
      this.isUp = !this.isUp;
      if(this.isDown)
        this.isDown = !this.isDown;
    }else if(thumb === 'down'){
      this.isDown = !this.isDown;
      if(this.isUp)
        this.isUp = !this.isUp;
    }

    this.thumbEvnt.emit({ newValue: this.isUp});
  }
}

export interface FavoriteChangedEventArgs{
  newValue: boolean
}