import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Hero[], orderBy: string = ''): Hero[] {

    if (orderBy === 'name')
      return heroes.sort((a, b) => a.name > b.name ? 1 : -1);

    if (orderBy === 'fly') 
      return heroes.sort((a, b) => a.fly > b.fly ? 1 : -1);

    if (orderBy === 'color')
      return heroes.sort((a, b) => a.color > b.color ? 1 : -1);
    
    return heroes;
  }

}
