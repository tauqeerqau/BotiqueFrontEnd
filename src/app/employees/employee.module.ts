import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeFormComponent } from './employee.component';

export const routes = [
  { path: '', component: EmployeeFormComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class CustomerModule {
  static routes = routes;
}
