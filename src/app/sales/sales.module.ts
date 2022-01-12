import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Own Modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Components
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { NoCommonsPageComponent } from './pages/no-commons-page/no-commons-page.component';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { SortingPageComponent } from './pages/sorting-page/sorting-page.component';
import { MyUpperPipe } from './pipes/myuppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';




@NgModule({
  declarations: [
    NumbersPageComponent,
    NoCommonsPageComponent,
    BasicsPageComponent,
    SortingPageComponent,
    MyUpperPipe,
    FlyPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersPageComponent,
    NoCommonsPageComponent,
    BasicsPageComponent,
    SortingPageComponent
  ]
})
export class SalesModule { }
