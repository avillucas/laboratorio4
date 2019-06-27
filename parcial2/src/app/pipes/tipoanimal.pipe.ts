import { Pipe, PipeTransform } from '@angular/core';
import { TipoAnimal } from '../enums/tipo-animal.enum';

@Pipe({
  name: 'tipoanimal'
})
export class TipoanimalPipe implements PipeTransform {

  transform(value: TipoAnimal): string {
    return  TipoAnimal[value].toString();
  }

}
