import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: Http) { 
    super('https://jsonplaceholder.typicode.com/posts',http);
   }

  }
