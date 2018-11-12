import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  @Input('clock') clock: number;
  intervalId;

  form = new FormGroup({
    username: new FormControl('',
    {
      validators: [Validators.required, 
      UsernameValidators.cannotContainSpace,
      UsernameValidators.minimCharacters],
      asyncValidators: UsernameValidators.shouldBeUnique
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
