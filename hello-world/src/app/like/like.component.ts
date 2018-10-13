import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Output('change') likeEvent = new EventEmitter(); 

  authors;

  onClick(){
    this.isActive = !this.isActive;
    this.likeEvent.emit({newLike: this.isActive});
  }
  

}

export interface LikeChangedEventArgs{
  newLike: boolean
}
