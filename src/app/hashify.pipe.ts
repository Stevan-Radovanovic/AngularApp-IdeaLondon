import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashify',
})
export class HashifyPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.substring(0, 3) + '7il7' + value.substr(4, 2);
  }
}
