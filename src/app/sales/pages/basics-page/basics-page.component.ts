import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent implements OnInit {

  nameLower: string = 'juanito';
  nameUpper: string = 'JUANITO';
  fullName: string = 'juAnito PePito';

  todaysDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
