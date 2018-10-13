import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from '../favorite/favorite.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = 'List of Courses';
  l = console.log;
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  isActive = true;
  eMail = "me@example.com";
  post={
    title: 'Star',
    isFavorite: false
  }
  
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  deactivateBtn($event){
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.l("Button active");  
    } else {
      this.l("Button deactivated.");
    }
    this.l($event);
  }
  enterWasPres(name){
    this.l('ENTER was pressed.\n'+name);
  }
  onKeyUp(){
    this.l(this.eMail);
  }
  
  onFavChanged(eventArgs: FavoriteChangedEventArgs){
    this.l("Fav changed! ", eventArgs.newValue);
  }
}
