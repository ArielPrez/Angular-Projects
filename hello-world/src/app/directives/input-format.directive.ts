import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private elemRef: ElementRef) { }
  // APPLYING DIRECTIVE AS AN ATRIVUTE AND USE PROPERTY BINDING TO SET THE TARGET FORMAT
  @Input('formato') format;
  // APPLYING DIRECTIVE AS AN ATRIVUTE AND USED AS TARGET FORMAT
  @Input('appInputFormat') formatDir;
  
  @HostListener('focus') onFocus(){
    console.log("click inside the input!");
  }
  @HostListener('blur') onblur(){
    console.log("exit from the input!");
    let value: string = this.elemRef.nativeElement.value;
    if(this.format == 'lowercase'){
      this.elemRef.nativeElement.value = value.toLowerCase();
    }
    else
      this.elemRef.nativeElement.value = value.toUpperCase();
  }
  

}
