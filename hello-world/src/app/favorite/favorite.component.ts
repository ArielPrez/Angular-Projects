import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is_Fav') isUp: boolean;
  @Input('is_Fav') isDown: boolean;
  
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
  }
}
