import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeidformatter',
  standalone: true
})
export class RecipeidformatterPipe implements PipeTransform {
  
  transform(value: string | undefined, ...args: string[]): string {
    if (!value) {
      return ''; 
      // Return an empty string if value is undefined
    }
    return value.replace("http://api.edamam.com/api/recipes/v2/","").split("?")[0];
  }


}
