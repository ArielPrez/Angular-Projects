import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  l = console.log;
  imageUrl = 'http://lorempixel.com/400/200';
  
  isActive = true;
  eMail = "me@example.com";
  
  constructor() { }

  ngOnInit() {
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
  

}
