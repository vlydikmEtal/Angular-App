import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateWords',
  standalone: true
})
export class TruncateWordsPipe implements PipeTransform {

  transform(value: string, limit: number = 4): string {
    if (!value) return ''

    return value.split(' ').slice(0, limit).join(' ')
  }

}
