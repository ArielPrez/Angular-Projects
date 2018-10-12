import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  person = [ 
    {firstName:"John", likes:26},
    {firstName:"Alan", likes:46},
    {firstName:"Jess", likes:33}
  ];

getAuthors(){
  // let author = ['author1','author2','author3'];
  // let likes = ['2','6','4'];
  return this.person;
}
}
