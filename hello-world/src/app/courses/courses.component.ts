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
  courses;
  post={
    title: 'Star',
    isFavorite: false
  }
  
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  
  onFavChanged(eventArgs: FavoriteChangedEventArgs){
    this.l("Fav changed! ", eventArgs.newValue);
  }
}
