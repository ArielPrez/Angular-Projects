import { SignupFormComponent } from '../../signup-form/signup-form.component';
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{

  constructor(public signUpComp: SignupFormComponent){}
 // signUpC = new SignupFormComponent();

  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0){
      return { cannotContainSpace: true };
      // , minlength:{requiredLength: 3, actualLength: control.value.length}
    }
    return null;
  }
  static minimCharacters(control: AbstractControl) : ValidationErrors | null {
    let minChars = 3;
    if(control.value.length < minChars){
      return { minimCharacters: true, minlength:{requiredLength: minChars, actualLength: control.value.length} };
    }
    return null;
  }

// ASYNCHRONOUS OPERATION TO SIMULATE A CALL TO THE SERVER TO CHECK IF THE USER IS TAKEN
  static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Ariel'){
          resolve({ shouldBeUnique: true });
        }else{
          resolve (null);
        }
      }, 3500);

      // AQUI QUIERO ACCEDER A UN METODO DE LA CLASE "SignupFormComponent"
    
     // this.signUpComp.intervalClockOFF();
    });
  }

}