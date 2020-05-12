import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Pipe({
  name: 'dOMseguro'
})
export class DOMseguroPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
      console.log(value)
      return this.sanitizer.bypassSecurityTrustResourceUrl(value)
  }

}

