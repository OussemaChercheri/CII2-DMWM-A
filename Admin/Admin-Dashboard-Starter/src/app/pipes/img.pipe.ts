import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img',
  pure: false
})
export class ImgPipe implements PipeTransform {
  
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
