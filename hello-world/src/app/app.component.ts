import { Component, Input } from '@angular/core';
import { NavComponent } from '../app/navbar/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  
  getTitle(){
    return this.title;
  }
  
}

export class LikeComponent{
  constructor(private _likesCount: number, private _isSelected: boolean){
  }
  onClick(){
    this._likesCount += (this._likesCount) ? -1 : +1;
    this._isSelected = !this._isSelected;
  }
  get likesCount(){
    return this._likesCount;
  }
  get isSelected(){
    return this._likesCount;
  }

  setNav(eventArgs: NavComponent){

  }

}


