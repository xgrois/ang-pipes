import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from '../sales/pages/basics-page/basics-page.component';
import { NoCommonsPageComponent } from '../sales/pages/no-commons-page/no-commons-page.component';
import { NumbersPageComponent } from '../sales/pages/numbers-page/numbers-page.component';
import { SortingPageComponent } from '../sales/pages/sorting-page/sorting-page.component';

const routes: Routes = [
  { path: '', component: BasicsPageComponent, pathMatch: 'full' },
  { path: 'numbers', component: NumbersPageComponent },
  { path: 'no-commons', component: NoCommonsPageComponent },
  { path: 'sorting', component: SortingPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
