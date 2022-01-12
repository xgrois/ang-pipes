import { Component, OnInit } from '@angular/core';
import { Hero, HeroColor } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sorting-page',
  templateUrl: './sorting-page.component.html',
  styles: [
  ]
})
export class SortingPageComponent implements OnInit {

  word: string = 'caca';
  useUpper: boolean = true;

  heroes: Hero[] = [
    {name: 'Superman', fly: true, color: HeroColor.red},
    {name: 'Batman', fly: false, color: HeroColor.black},
    {name: 'Robin', fly: false, color: HeroColor.blue},
    {name: 'Green Lantern', fly: true, color: HeroColor.green}
  ];

  heroes2: Hero[] = [
    {name: 'Superman', fly: true, color: HeroColor.red},
    {name: 'Batman', fly: false, color: HeroColor.black},
    {name: 'Robin', fly: false, color: HeroColor.blue},
    {name: 'Green Lantern', fly: true, color: HeroColor.green}
  ];

  orderBy: string = 'name';

  constructor() { }

  ngOnInit(): void {

  }

  changeUpper() {
    this.useUpper = !this.useUpper;
  }

  changeOrderBy(orderBy: string) {
    this.orderBy = orderBy; 
  }

}
