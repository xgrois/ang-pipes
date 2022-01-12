import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styles: [
  ]
})
export class NumbersPageComponent implements OnInit {

  netSales: number = 200120.876;
  per: number = 0.21;

  constructor() { }

  ngOnInit(): void {
  }

}
