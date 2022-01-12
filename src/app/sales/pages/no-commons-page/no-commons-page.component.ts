import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators'

@Component({
  selector: 'app-no-commons-page',
  templateUrl: './no-commons-page.component.html',
  styles: [
  ]
})
export class NoCommonsPageComponent implements OnInit {

  // i18nSelect
  names: string[] = ['Sam', 'Anne'];;
  genres: string[] = ['male', 'female'] ;
  
  genreMap = {
    'male': 'he',
    'female': 'she'
  }

  selector: number = 0;
  
  // i18nPlural
  clientQueue0: string[] = [];
  clientQueue1: string[] = ['Sam'];
  clientQueue2: string[] = ['Sam', 'Anne'];
  clientQueueN: string[] = ['Sam', 'Anne', 'Bob', 'Mark'];

  clientQueues = [this.clientQueue0, this.clientQueue1, this.clientQueue2, this.clientQueueN];
  selector2: number = 0;

  clientMap = {
    '=0': 'no client',
    '=1': 'a single client',
    '=2': 'two clients',
    'other': 'several clients'
  }

  // Slice Pipe
  phrase: string = 'abracadabra pata de cabra';

  // KeyValue Pipe
  person = {
    name: 'Djokovic',
    age: '30',
    address: 'Sidney, Australia'
  };

  // Async Pipe
  myObservable = interval(1000); // 0, 1, 2, every second

  durationInSeconds: number = 5;
  myCountdownObservable = interval(1000).pipe(take(this.durationInSeconds), map(count => this.durationInSeconds - count - 1));

  myPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('End of promise');
    }, 5000);
  });

  tsCode = `
  myPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('End of promise');
    }, 5000);
  });
  `
  htmlCode = `
  {{myPromise|async}}
  `

  constructor() { }

  ngOnInit(): void {
  }

  changei18nSelect() {
    this.selector = (this.selector + 1) % this.names.length;
    console.log(this.selector);
  }

  changei18nPlural() {
    this.selector2 = (this.selector2 + 1) % this.clientQueues.length;
    console.log(this.selector2);
  }

}
