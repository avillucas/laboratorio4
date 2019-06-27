import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoanimal'
})
export class TipoanimalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
