import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'ng2-datetime/src/vendor/bootstrap-datepicker/bootstrap-datepicker.min.js';
import 'ng2-datetime/src/vendor/bootstrap-timepicker/bootstrap-timepicker.min.js';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

import { CustomerFormComponent } from './customer.component.ts';

export const routes = [
  { path: '', component: CustomerFormComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NKDatetimeModule
  ]
})
export default class CustomerModule {
  static routes = routes;
}
