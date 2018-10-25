import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is_Fav') isUp: boolean = false;
  @Input('is_Fav') isDown: boolean = false;
  @Output('change') thumbEvnt = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  onClick(thumb){
    if(thumb === 'up'){
      this.isUp = !this.isUp;
      if(this.isUp)
        this.thumbEvnt.emit({ up: this.isUp});
      if(this.isDown)
        this.isDown = !this.isDown;
    }else if(thumb === 'down'){
      // this.thumbEvnt.emit({ up: this.isDown});
      this.isDown = !this.isDown;
      if(this.isDown)
        this.thumbEvnt.emit({ down: this.isDown});
      if(this.isUp)
        this.isUp = !this.isUp;
    }
    // this.thumbEvnt.emit({ up: true});
    
  }
}

export interface FavoriteChangedEventArgs{
  up: boolean,
  down: boolean
}