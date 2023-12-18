import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  //getting full name letters as image 
  transform(fullName: string, ...args: unknown[]): unknown {
    if (!fullName) {
      return 'N/A';
    }
    const words = fullName.split(' ');
    const letters = words.map(word => word.charAt(0)).join('');
    return letters;
  }

}
