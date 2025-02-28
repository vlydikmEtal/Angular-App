import { Pipe, PipeTransform } from '@angular/core';
import { Profile } from '../interfaces/profile.inrerfaces';

@Pipe({
  name: 'filterProducts',
  standalone: true,
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: Profile[], search: string): Profile[] {
    return (
      products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      ) &&
      products.filter((p) =>
        p.category.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
}
