import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidatorsService } from '../services/username-validators.service';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  providers:[UsernameValidatorsService] //Agrege el servicio
})

export class SignupFormComponent {
  //Aqui puse el copy del servicio
  constructor(public UsernameValidators: UsernameValidatorsService) {}
 
  @Input('clock') clock: number;
  intervalId;

  form = new FormGroup({
    username: new FormControl('',
    {
      validators: [Validators.required,
        //ya pones el this 
      this.UsernameValidators.cannotContainSpace,
      this.UsernameValidators.minimCharacters],
      asyncValidators: this.UsernameValidators.shouldBeUnique
    }),
    password: new FormControl('', Validators.required)
  });

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
  intervalClockON(){
    this.clock = 1;
    if(!this.intervalId){
      this.intervalId = setInterval(() => {
        if(this.clock<2){
          this.clock++;
          console.log(this.clock);
        }
        else{
          this.clock = 0;
        }
        // this.clock.toString;
      },350);
    }
  }
  intervalClockOFF(){
    if(this.intervalId)
      // console.log(this.intervalId);
      clearInterval(this.intervalId);
      this.intervalId = "";
  }
}
