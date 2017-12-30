import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerMeasurementForm } from './customerMeasurementForm.component';

export const routes = [
  { path: '', component: CustomerMeasurementForm, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    CustomerMeasurementForm
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class CustomerMeasurementFormModule {
  static routes = routes;
}
