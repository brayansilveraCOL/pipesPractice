import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tareaOcultar'
})
export class TareaOcultarPipe implements PipeTransform {

  transform(value: string, Activar: boolean= true): string {
    return (Activar) ? '*'.repeat(value.length) : value;
  }

}
