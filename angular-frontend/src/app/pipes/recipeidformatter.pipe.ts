import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeidformatter',
  standalone: true
})
export class RecipeidformatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
