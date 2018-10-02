import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;
    let prepo = [
      'of', 'the', 'and'
    ];
    let words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      const elem = words[i];
      if(i > 0 && prepo.includes(elem.toLowerCase())){
        words[i] = elem.toLowerCase();
      }else{
        words[i] = elem.substr(0,1).toUpperCase() + elem.substr(1).toLowerCase();
      }
    }

    return words.join(' ');
  }

}
