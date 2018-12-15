import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class FollowersService extends DataService{

  constructor(http: Http) { 
    super('https://tinyfac.es/api/users', http);
}

// https://uifaces.co/api?limit=10&emotion[]=happiness