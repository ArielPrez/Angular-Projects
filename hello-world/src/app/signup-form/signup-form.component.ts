import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  @Input('clock') clock: number;
  intervalId;

  // form = new FormGroup({
  //   //FormGroup as complex object of a Form nested in another FormGroup
  //   account: new FormGroup({
  //     username: new FormControl('',
  //     {
  //       validators: [Validators.required, 
  //       UsernameValidators.cannotContainSpace,
  //       UsernameValidators.minimCharacters],
  //       asyncValidators: UsernameValidators.shouldBeUnique
  //     }),
  //     password: new FormControl('', Validators.required)
  //   })
    
  // });

  form;

// CONSTRUCTOR OF THE CLASS USED TO IMPLEMENT A FORM-BUILDER
  constructor(fb: FormBuilder){
    this.form = fb.group({
      //FormGroup as complex object of a Form nested in another FormGroup
      account: fb.group({
        username: ['',
          {
            validators: [Validators.required, 
            UsernameValidators.cannotContainSpace,
            UsernameValidators.minimCharacters],
            asyncValidators: UsernameValidators.shouldBeUnique
          }
        ],
        password: ['', Validators.required]
      })
    });
  }

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }
  // LOGIN EXAMPLE WITH THE CALL TO THE SERVER
  // login(){
  //   let isValid = authService.login(this.form.value);
  //   if(!isValid){
  //     this.form.setErrors({
  //       invalidLogin: true
  //     })
  //   }
  // }

  get username(){
    return this.form.get('account.username');
  }
  get password(){
    return this.form.get('account.password');
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
