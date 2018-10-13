import { Component } from '@angular/core';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  courses = [1,2,3];
  // star = faStar;

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
  
}


// export class Point{
//   constructor(private _x?: number, private _y?: number){
//   }
//   draw(){
//     console.log('X: '+this._x + ', Y: '+ this._y);
//   }
//   get x(){
//     return this._x;
//   }
//   set x(value){
//     if(value < 0)
//       throw new Error('The value cannot be less than 0.');
//     this._x = value;
//   }
// }

// let point = new Point(1,2);
// let x = point.x;
// point.x = 10;
// point.draw();

